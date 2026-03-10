import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { monitorMarkup } from './templates.generated.js';

const LEGACY_SCRIPTS = ['/monitor-state.js', '/monitor-render.js', '/monitor-app.js'];
const ABOUT_LOGO_PATH = '/pynqcast-logo.svg';
const TAU = Math.PI * 2;

function buildCoinFaceTexture(sourceImage, { size = 256, reverse = false } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const center = size / 2;
  const outerRadius = size * 0.46;
  const midRadius = size * 0.415;
  const innerRadius = size * 0.335;
  const logoRadius = size * 0.255;

  ctx.clearRect(0, 0, size, size);
  ctx.imageSmoothingEnabled = false;

  // Chunky concentric bands read better than a smooth gradient at low res.
  ctx.fillStyle = '#24080a';
  ctx.beginPath();
  ctx.arc(center, center, outerRadius, 0, TAU);
  ctx.fill();

  ctx.fillStyle = '#88262b';
  ctx.beginPath();
  ctx.arc(center, center, midRadius, 0, TAU);
  ctx.fill();

  ctx.fillStyle = reverse ? '#c84245' : '#f05a50';
  ctx.beginPath();
  ctx.arc(center, center, innerRadius, 0, TAU);
  ctx.fill();

  ctx.strokeStyle = reverse ? '#f6c2b9' : '#ffd5c6';
  ctx.lineWidth = Math.round(size * 0.028);
  ctx.beginPath();
  ctx.arc(center, center, size * 0.365, 0, TAU);
  ctx.stroke();

  ctx.fillStyle = reverse ? 'rgba(255, 213, 198, 0.12)' : 'rgba(255, 213, 198, 0.18)';
  ctx.beginPath();
  ctx.arc(center - size * 0.08, center - size * 0.1, size * 0.13, 0, TAU);
  ctx.fill();

  if (sourceImage) {
    const maxLogoWidth = size * 0.46;
    const maxLogoHeight = size * 0.28;
    const scale = Math.min(maxLogoWidth / sourceImage.width, maxLogoHeight / sourceImage.height);
    const drawWidth = Math.max(1, Math.round(sourceImage.width * scale));
    const drawHeight = Math.max(1, Math.round(sourceImage.height * scale));
    const dx = Math.round(center - drawWidth / 2);
    const dy = Math.round(center - drawHeight / 2);

    ctx.save();
    ctx.beginPath();
    ctx.arc(center, center, logoRadius, 0, TAU);
    ctx.clip();
    if (reverse) {
      ctx.translate(size, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(sourceImage, size - dx - drawWidth, dy, drawWidth, drawHeight);
    } else {
      ctx.drawImage(sourceImage, dx, dy, drawWidth, drawHeight);
    }
    ctx.restore();
  }

  // Pixel notches around the rim help the disc read as a collectible token.
  ctx.fillStyle = reverse ? '#f9d4c8' : '#fff0e5';
  for (let i = 0; i < 10; i += 1) {
    const angle = (i / 10) * TAU;
    const x = center + Math.cos(angle) * size * 0.34;
    const y = center + Math.sin(angle) * size * 0.34;
    ctx.fillRect(Math.round(x - 3), Math.round(y - 3), 6, 6);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  if ('colorSpace' in texture) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  texture.needsUpdate = true;
  return texture;
}

function loadLegacyScripts() {
  if (window.__monitorLegacyBootstrapped) return;
  window.__monitorLegacyBootstrapped = true;

  const loadAt = (index) => {
    if (index >= LEGACY_SCRIPTS.length) {
      window.dispatchEvent(new Event('monitor:legacy-ready'));
      return;
    }

    const script = document.createElement('script');
    script.src = LEGACY_SCRIPTS[index];
    script.async = false;
    script.onload = () => loadAt(index + 1);
    script.onerror = () => {
      console.error(`[monitor-ui] failed to load legacy script: ${LEGACY_SCRIPTS[index]}`);
    };
    document.body.appendChild(script);
  };

  loadAt(0);
}

function mountAboutLogoScene(rootEl) {
  const wrap = rootEl?.querySelector('.about-sprite-wrap');
  const img = wrap?.querySelector('.about-logo-sprite');
  const stage = rootEl?.querySelector('.about-stage');
  const groundShadow = stage?.querySelector('.about-ground-shadow');
  const lightCone = stage?.querySelector('.about-light-cone');

  if (!wrap || !img || wrap.dataset.threeMounted === '1') {
    return () => {};
  }

  wrap.dataset.threeMounted = '1';
  wrap.classList.add('three-ready');
  stage?.classList.add('three-ready');

  const host = document.createElement('div');
  host.className = 'about-3d-host';
  wrap.appendChild(host);

  let destroyed = false;
  let rafId = 0;
  let observer = null;
  let renderer = null;
  let scene = null;
  let camera = null;
  let coinGroup = null;
  let coin = null;
  let sparks = null;
  let frontTexture = null;
  let backTexture = null;
  let geometry = null;
  let sparkGeometry = null;
  let materials = [];

  const renderFrame = () => {
    if (!renderer || !scene || !camera) return;
    renderer.render(scene, camera);
  };

  const resize = () => {
    if (!renderer || !camera) return;
    const width = Math.max(280, Math.round(host.clientWidth || 480));
    const height = Math.max(280, Math.round(host.clientHeight || width));
    const renderWidth = Math.max(1, Math.round(width / 3));
    const renderHeight = Math.max(1, Math.round(height / 3));
    renderer.setSize(renderWidth, renderHeight, false);
    renderer.domElement.style.width = `${width}px`;
    renderer.domElement.style.height = `${height}px`;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderFrame();
  };

  try {
    renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch (error) {
    console.error('[monitor-ui] failed to create WebGL renderer:', error);
    wrap.dataset.threeMounted = '0';
    wrap.classList.remove('three-ready');
    stage?.classList.remove('three-ready');
    host.remove();
    return () => {};
  }

  renderer.setPixelRatio(1);
  if ('outputColorSpace' in renderer) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  renderer.domElement.style.imageRendering = 'pixelated';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0.06, 4.9);

  scene.add(new THREE.AmbientLight(0xffe7d8, 0.72));

  const keyLight = new THREE.PointLight(0xf05a50, 8.5, 14);
  keyLight.position.set(2.5, 1.7, 4.2);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0x4d8cff, 2.4, 12);
  fillLight.position.set(-2.8, -0.3, 2.8);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0xffb08e, 4.8, 12);
  rimLight.position.set(0, -1.9, -2.4);
  scene.add(rimLight);

  frontTexture = buildCoinFaceTexture(null, { reverse: false });
  backTexture = buildCoinFaceTexture(null, { reverse: true });

  const logoImage = new Image();
  logoImage.onload = () => {
    if (frontTexture) {
      frontTexture.dispose();
    }
    if (backTexture) {
      backTexture.dispose();
    }
    frontTexture = buildCoinFaceTexture(logoImage, { reverse: false });
    backTexture = buildCoinFaceTexture(logoImage, { reverse: true });
    if (coin?.material?.[1]) {
      coin.material[1].map = frontTexture;
      coin.material[1].needsUpdate = true;
    }
    if (coin?.material?.[2]) {
      coin.material[2].map = backTexture;
      coin.material[2].needsUpdate = true;
    }
    renderFrame();
  };
  logoImage.src = ABOUT_LOGO_PATH;

  geometry = new THREE.CylinderGeometry(1.14, 1.14, 0.34, 48, 1, false);

  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: 0x7d2429,
    metalness: 0.58,
    roughness: 0.32,
    emissive: new THREE.Color('#260709'),
    emissiveIntensity: 0.22,
    flatShading: true,
  });
  const faceMaterial = new THREE.MeshStandardMaterial({
    map: frontTexture,
    metalness: 0.28,
    roughness: 0.38,
    emissive: new THREE.Color('#1e090a'),
    emissiveIntensity: 0.18,
    flatShading: true,
  });
  const backFaceMaterial = new THREE.MeshStandardMaterial({
    map: backTexture,
    metalness: 0.26,
    roughness: 0.42,
    emissive: new THREE.Color('#160506'),
    emissiveIntensity: 0.12,
    flatShading: true,
  });
  const sparkMaterial = new THREE.PointsMaterial({
    color: 0xff9488,
    size: 0.055,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.86,
  });

  materials = [
    edgeMaterial,
    faceMaterial,
    backFaceMaterial,
    sparkMaterial,
  ];

  coinGroup = new THREE.Group();
  coinGroup.rotation.z = 0.05;
  scene.add(coinGroup);

  coin = new THREE.Mesh(geometry, materials.slice(0, 3));
  coin.rotation.x = Math.PI / 2;
  coinGroup.add(coin);

  sparkGeometry = new THREE.BufferGeometry();
  const sparkCount = 28;
  const positions = new Float32Array(sparkCount * 3);
  for (let i = 0; i < sparkCount; i += 1) {
    const angle = (i / sparkCount) * TAU;
    const radius = 1.34 + (i % 3) * 0.06;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (i % 2 === 0 ? 0.15 : -0.12) + (i % 5) * 0.015;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  sparkGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  sparks = new THREE.Points(sparkGeometry, sparkMaterial);
  scene.add(sparks);

  const clock = new THREE.Clock();
  const animate = () => {
    if (destroyed) return;
    const t = clock.getElapsedTime();
    const bob = Math.sin(t * 1.55) * 0.18;
    const bobPhase = (Math.sin(t * 1.55) + 1) / 2;
    const spin = t * 2.02;

    if (coinGroup) {
      coinGroup.position.y = bob;
      coinGroup.rotation.y = spin;
      coinGroup.rotation.z = 0.05 + Math.sin(t * 0.7) * 0.025;
    }

    if (sparks) {
      sparks.position.y = bob * 0.85;
      sparks.rotation.y = -spin * 0.32;
    }

    keyLight.position.x = Math.cos(t * 0.72) * 2.7;
    keyLight.position.z = Math.sin(t * 0.72) * 1.1 + 4.0;

    if (groundShadow) {
      const scaleX = 1.12 - bobPhase * 0.24;
      const scaleY = 1.0 - bobPhase * 0.2;
      groundShadow.style.transform = `translateX(-50%) scaleX(${scaleX.toFixed(3)}) scaleY(${scaleY.toFixed(3)})`;
      groundShadow.style.opacity = `${(0.88 - bobPhase * 0.24).toFixed(3)}`;
      groundShadow.style.filter = `blur(${(6 + bobPhase * 4).toFixed(2)}px)`;
    }

    if (lightCone) {
      const lightScaleX = 0.94 + bobPhase * 0.08;
      const lightScaleY = 0.98 + bobPhase * 0.16;
      const lightY = -bobPhase * 16;
      lightCone.style.transform = `translateX(-50%) translateY(${lightY.toFixed(2)}px) scaleX(${lightScaleX.toFixed(3)}) scaleY(${lightScaleY.toFixed(3)})`;
      lightCone.style.opacity = `${(0.56 + bobPhase * 0.14).toFixed(3)}`;
    }

    renderFrame();
    rafId = window.requestAnimationFrame(animate);
  };

  resize();
  animate();

  if ('ResizeObserver' in window) {
    observer = new ResizeObserver(() => resize());
    observer.observe(host);
  } else {
    window.addEventListener('resize', resize);
  }

  return () => {
    destroyed = true;
    window.cancelAnimationFrame(rafId);
    if (observer) {
      observer.disconnect();
    } else {
      window.removeEventListener('resize', resize);
    }
    coin?.removeFromParent();
    sparks?.removeFromParent();
    coinGroup?.removeFromParent();
    geometry?.dispose();
    sparkGeometry?.dispose();
    frontTexture?.dispose();
    backTexture?.dispose();
    materials.forEach((material) => material.dispose());
    renderer?.dispose();
    host.remove();
    wrap.classList.remove('three-ready');
    stage?.classList.remove('three-ready');
    if (groundShadow) {
      groundShadow.style.removeProperty('transform');
      groundShadow.style.removeProperty('opacity');
      groundShadow.style.removeProperty('filter');
    }
    if (lightCone) {
      lightCone.style.removeProperty('transform');
      lightCone.style.removeProperty('opacity');
    }
    delete wrap.dataset.threeMounted;
  };
}

function MonitorRoot({ mode }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const cleanupAbout = mountAboutLogoScene(rootRef.current);
    loadLegacyScripts();
    return () => cleanupAbout();
  }, []);

  return (
    <div
      ref={rootRef}
      className="react-monitor-root"
      dangerouslySetInnerHTML={{ __html: monitorMarkup[mode] || monitorMarkup.pynq }}
    />
  );
}

const mode = window.__MONITOR_MODE__ === 'sim' ? 'sim' : 'pynq';
const container = document.getElementById('root');

if (!container) {
  throw new Error('Missing #root for monitor React mount');
}

createRoot(container).render(<MonitorRoot mode={mode} />);

import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { monitorMarkup } from './templates.generated.js';

const LEGACY_SCRIPTS = ['/monitor-state.js', '/monitor-render.js', '/monitor-app.js'];
const ABOUT_LOGO_PATH = '/pynqcast-logo.svg';

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

  if (!wrap || !img || wrap.dataset.threeMounted === '1') {
    return () => {};
  }

  wrap.dataset.threeMounted = '1';
  wrap.classList.add('three-ready');

  const host = document.createElement('div');
  host.className = 'about-3d-host';
  wrap.appendChild(host);

  let destroyed = false;
  let rafId = 0;
  let observer = null;
  let renderer = null;
  let scene = null;
  let camera = null;
  let plaque = null;
  let backer = null;
  let texture = null;
  let geometry = null;
  let backerGeometry = null;
  let materials = [];

  const renderFrame = () => {
    if (!renderer || !scene || !camera) return;
    renderer.render(scene, camera);
  };

  const resize = () => {
    if (!renderer || !camera) return;
    const width = Math.max(320, Math.round(host.clientWidth || 520));
    const height = Math.max(220, Math.round(host.clientHeight || width * 0.56));
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
  camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.18, 5.3);

  scene.add(new THREE.AmbientLight(0xffe7d8, 1.18));

  const keyLight = new THREE.PointLight(0xf05a50, 14, 16);
  keyLight.position.set(2.4, 1.9, 4.8);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0x4d8cff, 6, 18);
  fillLight.position.set(-3.1, -0.6, 3.3);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0xffb08e, 8, 14);
  rimLight.position.set(0, -2.3, -2.8);
  scene.add(rimLight);

  texture = new THREE.TextureLoader().load(ABOUT_LOGO_PATH, () => {
    if (texture) {
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      if ('colorSpace' in texture) {
        texture.colorSpace = THREE.SRGBColorSpace;
      }
      renderFrame();
    }
  });
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;

  geometry = new THREE.BoxGeometry(3.1, 1.72, 0.28);
  backerGeometry = new THREE.BoxGeometry(3.28, 1.9, 0.12);

  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: 0x2b4265,
    metalness: 0.08,
    roughness: 0.84,
  });
  const topEdgeMaterial = new THREE.MeshStandardMaterial({
    color: 0x4f719b,
    metalness: 0.06,
    roughness: 0.82,
  });
  const bottomEdgeMaterial = new THREE.MeshStandardMaterial({
    color: 0x15243f,
    metalness: 0.14,
    roughness: 0.9,
  });
  const faceMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.12,
    metalness: 0.08,
    roughness: 0.34,
    emissive: new THREE.Color('#12070a'),
    emissiveIntensity: 0.26,
  });
  const backFaceMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.12,
    color: new THREE.Color('#d0d9ea'),
    metalness: 0.04,
    roughness: 0.42,
  });
  const backerMaterial = new THREE.MeshStandardMaterial({
    color: 0x10192d,
    metalness: 0.03,
    roughness: 0.92,
  });

  materials = [
    edgeMaterial,
    edgeMaterial,
    topEdgeMaterial,
    bottomEdgeMaterial,
    faceMaterial,
    backFaceMaterial,
    backerMaterial,
  ];

  plaque = new THREE.Mesh(geometry, materials.slice(0, 6));
  plaque.rotation.x = -0.12;
  plaque.position.z = 0.08;
  scene.add(plaque);

  backer = new THREE.Mesh(backerGeometry, backerMaterial);
  backer.position.set(0.08, -0.04, -0.2);
  backer.rotation.x = -0.12;
  scene.add(backer);

  const clock = new THREE.Clock();
  const animate = () => {
    if (destroyed) return;
    const t = clock.getElapsedTime();
    const bob = Math.sin(t * 2.2) * 0.16;
    const yaw = Math.sin(t * 1.1) * 0.72;

    plaque.position.y = bob;
    plaque.rotation.y = yaw;

    backer.position.y = bob - 0.05;
    backer.rotation.y = yaw * 0.9;

    keyLight.position.x = Math.cos(t * 0.8) * 2.7;
    keyLight.position.z = Math.sin(t * 0.8) * 1.5 + 4.4;

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
    plaque?.removeFromParent();
    backer?.removeFromParent();
    geometry?.dispose();
    backerGeometry?.dispose();
    texture?.dispose();
    materials.forEach((material) => material.dispose());
    renderer?.dispose();
    host.remove();
    wrap.classList.remove('three-ready');
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

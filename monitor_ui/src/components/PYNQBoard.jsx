import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as THREE from 'three';

const WHITE_LOGO_TEXTURE = '/assets/pynqcast-white.png';

function BoardStage({ hostSlot }) {
  const mountRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const shadow = shadowRef.current;
    const wrap = hostSlot?.closest('.about-sprite-wrap');
    if (!mount || !shadow || !wrap) {
      return () => {};
    }

    wrap.classList.add('board-ready');

    const W = Math.max(320, Math.round(mount.clientWidth || 480));
    const H = Math.max(280, Math.round(mount.clientHeight || 280));

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(Math.floor(W / 4), Math.floor(H / 4));
    renderer.domElement.style.width = `${W}px`;
    renderer.domElement.style.height = `${H}px`;
    renderer.domElement.style.imageRendering = 'pixelated';
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.7;
    renderer.setPixelRatio(1);
    if ('outputColorSpace' in renderer) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
    camera.position.set(0, 0.2, 6.2);

    scene.add(new THREE.AmbientLight(0x330000, 2.5));

    const redKey = new THREE.PointLight(0xdd2200, 80, 16);
    const glint1 = new THREE.PointLight(0xffffff, 55, 7);
    const glint2 = new THREE.PointLight(0xffeedd, 40, 6);
    const rimLight = new THREE.PointLight(0x1133aa, 18, 10);

    rimLight.position.set(-2.4, 1.6, -2.8);
    redKey.position.set(2.5, 1.8, 3);
    glint1.position.set(1, 1.5, 2.5);
    glint2.position.set(-1.6, 1.1, 2.0);

    scene.add(redKey);
    scene.add(glint1);
    scene.add(glint2);
    scene.add(rimLight);

    const board = new THREE.Group();
    scene.add(board);

    const pcbFaceMaterial = new THREE.MeshStandardMaterial({
      color: 0x3a0000,
      metalness: 0.85,
      roughness: 0.12,
      emissive: new THREE.Color('#0a0000'),
      emissiveIntensity: 0.4,
    });

    const pcbEdgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x250000,
      metalness: 0.8,
      roughness: 0.2,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFB800,
      metalness: 1.0,
      roughness: 0.04,
      emissive: new THREE.Color('#221100'),
      emissiveIntensity: 0.15,
    });

    const boardBase = new THREE.Mesh(
      new THREE.BoxGeometry(3.55, 2.3, 0.16),
      pcbEdgeMaterial,
    );
    board.add(boardBase);

    const boardCore = new THREE.Mesh(
      new THREE.BoxGeometry(3.35, 2.1, 0.11),
      pcbFaceMaterial,
    );
    boardCore.position.z = 0.03;
    board.add(boardCore);

    const boardBack = new THREE.Mesh(
      new THREE.BoxGeometry(3.35, 2.1, 0.11),
      pcbFaceMaterial,
    );
    boardBack.position.z = -0.03;
    board.add(boardBack);

    const addTrace = (x, y, width, height, depth = 0.012) => {
      const trace = new THREE.Mesh(
        new THREE.BoxGeometry(width, height, depth),
        goldMaterial,
      );
      trace.position.set(x, y, 0.09);
      board.add(trace);
    };

    addTrace(-0.92, 0.62, 1.12, 0.08);
    addTrace(0.38, 0.62, 1.32, 0.08);
    addTrace(-1.08, 0.16, 0.18, 0.86);
    addTrace(1.16, 0.12, 0.18, 0.92);
    addTrace(-0.24, -0.3, 2.12, 0.08);
    addTrace(0.0, -0.72, 1.52, 0.08);
    addTrace(-0.78, -0.95, 0.18, 0.54);
    addTrace(0.84, -0.9, 0.18, 0.42);

    const chip = new THREE.Mesh(
      new THREE.BoxGeometry(1.22, 0.92, 0.16),
      pcbEdgeMaterial,
    );
    chip.position.set(0.08, 0.04, 0.13);
    board.add(chip);

    const chipInset = new THREE.Mesh(
      new THREE.BoxGeometry(1.08, 0.78, 0.04),
      pcbFaceMaterial,
    );
    chipInset.position.set(0.08, 0.04, 0.21);
    board.add(chipInset);

    for (let index = 0; index < 10; index += 1) {
      const pin = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.08, 0.06),
        goldMaterial,
      );
      pin.position.set(-1.54 + index * 0.34, 1.23, 0.04);
      board.add(pin);

      const oppositePin = pin.clone();
      oppositePin.position.y = -1.23;
      board.add(oppositePin);
    }

    const loader = new THREE.TextureLoader();
    const tex = loader.load(WHITE_LOGO_TEXTURE, () => {
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      if ('colorSpace' in tex) {
        tex.colorSpace = THREE.SRGBColorSpace;
      }
      tex.needsUpdate = true;
    });

    const logoMaterial = new THREE.MeshStandardMaterial({
      map: tex,
      color: 0xffffff,
      metalness: 0.18,
      roughness: 0.36,
      emissive: new THREE.Color('#220000'),
      emissiveIntensity: 0.2,
      transparent: true,
      alphaTest: 0.08,
    });

    const logoPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2.28, 1.28),
      logoMaterial,
    );
    logoPlane.position.set(0.02, 0.1, 0.106);
    board.add(logoPlane);

    const materials = [pcbFaceMaterial, pcbEdgeMaterial, goldMaterial, logoMaterial];
    const geometries = [
      boardBase.geometry,
      boardCore.geometry,
      boardBack.geometry,
      chip.geometry,
      chipInset.geometry,
      logoPlane.geometry,
    ];

    board.children.forEach((child) => {
      if (child !== boardBase && child !== boardCore && child !== boardBack && child !== chip && child !== chipInset && child !== logoPlane) {
        geometries.push(child.geometry);
      }
    });

    let rafId = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const t = clock.getElapsedTime();
      const bobPhase = (Math.sin(t * 1.4) + 1) / 2;

      board.rotation.y = t * 1.1;
      board.rotation.x = 0.25 + Math.sin(t * 0.5) * 0.08;
      board.rotation.z = Math.sin(t * 0.7) * 0.06;
      board.position.y = Math.sin(t * 1.4) * 0.18;

      redKey.position.x = Math.cos(t * 0.6) * 4;
      redKey.position.z = Math.sin(t * 0.6) * 4 + 2;

      glint1.position.x = Math.cos(t * 2.2) * 2.5;
      glint1.position.y = Math.sin(t * 1.6) * 2.0;
      glint1.position.z = 2.5;
      glint2.position.x = Math.cos(t * 1.8 + Math.PI) * 2.0;
      glint2.position.y = Math.sin(t * 2.1 + Math.PI) * 1.5;
      glint2.position.z = 2.0;

      shadow.style.transform =
        `translateX(-50%) scaleX(${(0.88 + bobPhase * 0.28).toFixed(3)}) scaleY(${(0.7 + bobPhase * 0.3).toFixed(3)})`;
      shadow.style.opacity = (0.4 + bobPhase * 0.45).toFixed(3);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      wrap.classList.remove('board-ready');
      cancelAnimationFrame(rafId);
      tex.dispose();
      materials.forEach((material) => material.dispose());
      geometries.forEach((geometry) => geometry?.dispose());
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [hostSlot]);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: 280, position: 'relative' }}
    >
      <div
        ref={shadowRef}
        style={{
          position: 'absolute',
          bottom: 12,
          left: '50%',
          width: 200,
          height: 18,
          background: 'radial-gradient(ellipse at center, rgba(180,20,20,0.6) 0%, transparent 70%)',
          pointerEvents: 'none',
          transformOrigin: 'center center',
        }}
      />
    </div>
  );
}

export default function PYNQBoard({ hostRef }) {
  const [portalTarget, setPortalTarget] = useState(null);

  useEffect(() => {
    const target = hostRef?.current?.querySelector('.about-react-board-slot');
    setPortalTarget(target || null);
  }, [hostRef]);

  if (!portalTarget) {
    return null;
  }

  return createPortal(<BoardStage hostSlot={portalTarget} />, portalTarget);
}

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as THREE from 'three';

const WHITE_LOGO_TEXTURE = '/assets/pynqcast-white.png';

class RoomEnvironment extends THREE.Scene {
  constructor() {
    super();
    const geo = new THREE.BoxGeometry();
    geo.deleteAttribute('uv');
    const room = new THREE.Mesh(geo, [
      new THREE.MeshStandardMaterial({ color: 0x888888, side: THREE.BackSide }),
      new THREE.MeshStandardMaterial({ color: 0x888888, side: THREE.BackSide }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.BackSide }),
      new THREE.MeshStandardMaterial({ color: 0x444444, side: THREE.BackSide }),
      new THREE.MeshStandardMaterial({ color: 0x888888, side: THREE.BackSide }),
      new THREE.MeshStandardMaterial({ color: 0x888888, side: THREE.BackSide }),
    ]);
    room.scale.setScalar(10);
    this.add(room);
    const l1 = new THREE.PointLight(0xff4400, 2, 20); l1.position.set(5, 5, 5);   this.add(l1);
    const l2 = new THREE.PointLight(0x0044ff, 1, 20); l2.position.set(-5, 5, -5); this.add(l2);
    const l3 = new THREE.PointLight(0xffffff, 1, 20); l3.position.set(0, 10, 0);  this.add(l3);
  }
}

function BoardStage({ hostSlot }) {
  const mountRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const shadow = shadowRef.current;
    const wrap = hostSlot?.closest('.about-sprite-wrap');
    if (!mount || !shadow || !wrap) return () => {};

    wrap.classList.add('board-ready');

    const W = Math.max(320, Math.round(mount.clientWidth || 480));
    const H = Math.max(280, Math.round(mount.clientHeight || 280));

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(Math.floor(W / 4), Math.floor(H / 4));
    renderer.domElement.style.width = `${W}px`;
    renderer.domElement.style.height = `${H}px`;
    renderer.domElement.style.imageRendering = 'pixelated';
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setPixelRatio(1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // ── Environment map ──
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const envMap = pmrem.fromScene(new RoomEnvironment()).texture;
    pmrem.dispose();

    const scene = new THREE.Scene();
    scene.environment = envMap;

    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
    camera.position.set(0, 0.2, 6.2);
    camera.lookAt(0, 0, 0);

    // ── Lights — scaled for Three.js r183 physical units ──
    scene.add(new THREE.AmbientLight(0x330000, 8));

    const redKey   = new THREE.PointLight(0xbb1500, 600, 16);
    const glint1   = new THREE.PointLight(0xffffff, 400,  7);
    const glint2   = new THREE.PointLight(0xffeedd, 300,  6);
    const rimLight = new THREE.PointLight(0x1133aa, 150, 10);

    redKey.position.set(2.5, 1.8, 3);
    glint1.position.set(1, 1.5, 2.5);
    glint2.position.set(-1.6, 1.1, 2.0);
    rimLight.position.set(-2.4, 1.6, -2.8);

    scene.add(redKey);
    scene.add(glint1);
    scene.add(glint2);
    scene.add(rimLight);

    // ── Materials ──
    const pcbFaceMaterial = new THREE.MeshStandardMaterial({
      color: 0x280000,
      metalness: 0.85,
      roughness: 0.08,
      emissive: new THREE.Color('#060000'),
      emissiveIntensity: 0.3,
      envMapIntensity: 1.8,
    });
    const pcbEdgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x180000,
      metalness: 0.8,
      roughness: 0.15,
      envMapIntensity: 1.2,
    });
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFB800,
      metalness: 1.0,
      roughness: 0.04,
      emissive: new THREE.Color('#221100'),
      emissiveIntensity: 0.15,
      envMapIntensity: 2.5,
    });

    // ── Board geometry ──
    const board = new THREE.Group();
    scene.add(board);

    const boardBase = new THREE.Mesh(new THREE.BoxGeometry(3.55, 2.3, 0.16), pcbEdgeMaterial);
    board.add(boardBase);

    const boardCore = new THREE.Mesh(new THREE.BoxGeometry(3.35, 2.1, 0.11), pcbFaceMaterial);
    boardCore.position.z = 0.03;
    board.add(boardCore);

    const boardBack = new THREE.Mesh(new THREE.BoxGeometry(3.35, 2.1, 0.11), pcbFaceMaterial);
    boardBack.position.z = -0.03;
    board.add(boardBack);

    // ── Traces ──
    const addTrace = (x, y, width, height, depth = 0.012) => {
      const trace = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), goldMaterial);
      trace.position.set(x, y, 0.09);
      board.add(trace);
    };
    addTrace(-0.92,  0.62, 1.12, 0.08);
    addTrace( 0.38,  0.62, 1.32, 0.08);
    addTrace(-1.08,  0.16, 0.18, 0.86);
    addTrace( 1.16,  0.12, 0.18, 0.92);
    addTrace(-0.24, -0.30, 2.12, 0.08);
    addTrace( 0.00, -0.72, 1.52, 0.08);
    addTrace(-0.78, -0.95, 0.18, 0.54);
    addTrace( 0.84, -0.90, 0.18, 0.42);

    // ── Main chip ──
    const chip = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.92, 0.16), pcbEdgeMaterial);
    chip.position.set(0.08, 0.04, 0.13);
    board.add(chip);

    const chipInset = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.78, 0.04), pcbFaceMaterial);
    chipInset.position.set(0.08, 0.04, 0.21);
    board.add(chipInset);

    // ── Edge pins ──
    for (let i = 0; i < 10; i++) {
      const pin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.06), goldMaterial);
      pin.position.set(-1.54 + i * 0.34, 1.23, 0.04);
      board.add(pin);
      const pinB = pin.clone();
      pinB.position.y = -1.23;
      board.add(pinB);
    }

    // ── Logo texture ──
    const loader = new THREE.TextureLoader();
    const tex = loader.load(WHITE_LOGO_TEXTURE, () => {
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.colorSpace = THREE.SRGBColorSpace;
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

    // Front logo
    const logoPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.28, 1.28), logoMaterial);
    logoPlane.position.set(0.02, 0.1, 0.106);
    board.add(logoPlane);

    // Back logo — flipped outward
    const logoPlaneBack = new THREE.Mesh(new THREE.PlaneGeometry(2.28, 1.28), logoMaterial);
    logoPlaneBack.position.set(0.02, 0.1, -0.106);
    logoPlaneBack.rotation.y = Math.PI;
    board.add(logoPlaneBack);

    // ── Cleanup arrays ──
    const materials = [pcbFaceMaterial, pcbEdgeMaterial, goldMaterial, logoMaterial];
    const geometries = [
      boardBase.geometry, boardCore.geometry, boardBack.geometry,
      chip.geometry, chipInset.geometry,
      logoPlane.geometry, logoPlaneBack.geometry,
    ];
    board.children.forEach((child) => {
      if (![boardBase, boardCore, boardBack, chip, chipInset, logoPlane, logoPlaneBack].includes(child)) {
        geometries.push(child.geometry);
      }
    });

    // ── Animation ──
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
      envMap.dispose();
      materials.forEach((m) => m.dispose());
      geometries.forEach((g) => g?.dispose());
      renderer.dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [hostSlot]);

  return (
    <div ref={mountRef} style={{ width: '100%', height: 280, position: 'relative' }}>
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

  if (!portalTarget) return null;

  return createPortal(<BoardStage hostSlot={portalTarget} />, portalTarget);
}

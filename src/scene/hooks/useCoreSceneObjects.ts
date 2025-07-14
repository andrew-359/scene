import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const useCoreSceneObjects = () => {
  let renderer: THREE.WebGLRenderer | null = null;
  let camera: THREE.PerspectiveCamera | null = null;
  let controls: OrbitControls | null = null;
  let scene: THREE.Scene | null = null;

  const create = (canvas: HTMLCanvasElement) => {
    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setClearColor('#e0e7ef');
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Camera
    camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(-2.9, 8, -8.6);
    camera.lookAt(0, 0, 0);

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.minPolarAngle = 0.3;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 1, 0);

    // Ограничение радиуса камеры
    const SKY_RADIUS = 24; 
    const SKY_MARGIN = 0.5;
    controls.maxDistance = SKY_RADIUS - SKY_MARGIN;
    controls.minDistance = 2; 

    scene = new THREE.Scene();
  };

  const getRenderer = () => renderer;
  const getCamera = () => camera;
  const getControls = () => controls;
  const getScene = () => scene;

  const dispose = () => {
    renderer?.dispose();
    controls?.dispose();
    renderer = null;
    camera = null;
    controls = null;
    scene = null;
  };

  return {
    create,
    getRenderer,
    getCamera,
    getControls,
    getScene,
    dispose,
  };
}; 
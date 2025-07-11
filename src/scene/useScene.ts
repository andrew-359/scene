import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useSky } from './hooks/useSky';
import { useGround } from './hooks/useGround';
import { useCube } from './hooks/useCube';
import { useEyeLight } from './hooks/useEyeLight';
import { useCoreSceneObjects } from './hooks/useCoreSceneObjects';
import { useLighting } from './hooks/useLighting';
import { useDoor } from './hooks/useDoor';
import { useMirrorCube } from './hooks/useMirrorCube';
import { GROUND_SIZE, CUBE_SIZE, SPHERE_CENTER, LIGHT_SPHERE2_RADIUS } from './constants';

export interface UseScene {
  mount: (canvas: HTMLCanvasElement) => void;
  dispose: () => void;
  toggleAmbientLight: () => void;
  toggleEyeLight: () => void;
  moveCube: (direction: string) => void;
  teleportCube: () => void;
  setDoorSize: ({ width, height }: { width: number, height: number }) => void;
}

// Тип для конфига куба
type CubeConfig = {
  size: number;
  position: [number, number, number];
}

type EnvironmentConfig = {
  type: 'environment';
  groundColor: string;
  groundSize: number;
}

export interface SceneConfig {
  cube: CubeConfig;
  background?: string;
  environment: EnvironmentConfig;
}

type SceneRefs = {
  renderer: THREE.WebGLRenderer | null;
  camera: THREE.PerspectiveCamera | null;
  scene: THREE.Scene | null;
  controls: OrbitControls | null;
  sky: any;
  ground: any;
  cube: any;
  eye: any;
  lightSphere: any;
  lightSphere2: any;
  ambientLight: THREE.AmbientLight | null;
  directionalLight: THREE.DirectionalLight | null;
  pointLight: THREE.PointLight | null;
  door: any;
  mirrorCube: any;
};

export const useScene = () => {
  let animationId: number | null = null;

  // --- refs для всех ключевых объектов ---
  const sceneRefs: SceneRefs = {
    renderer: null,
    camera: null,
    scene: null,
    controls: null,
    sky: null,
    ground: null,
    cube: null,
    eye: null,
    lightSphere: null,
    lightSphere2: null,
    ambientLight: null,
    directionalLight: null,
    pointLight: null,
    door: null,
    mirrorCube: null,
  };

  const { init, toggle } = useLighting();
  const { createCube, moveCube: moveCubeFn, teleportCube: teleportCubeFn } = useCube();
  const eyeLight = useEyeLight();
  const { createSky }  = useSky();
  const { createGround } = useGround();
  const { createDoor } = useDoor();
  const { createMirrorCube } = useMirrorCube();

  // --- Ограничения движения куба ---
  const cubeMovementLimits = {
    groundSize: GROUND_SIZE,
    cubeSize: CUBE_SIZE,
    sphereCenter: SPHERE_CENTER,
    minDistance: LIGHT_SPHERE2_RADIUS + CUBE_SIZE / 2 + 0.2,
    maxDistance: 5,
  };

  // --- mount: инициализация сцены и всех объектов ---
  const mount = (canvas: HTMLCanvasElement) => {
    //базовые настройки
    const { create } = useCoreSceneObjects();
    const refs = create(canvas);
    sceneRefs.renderer = refs.renderer;
    sceneRefs.camera = refs.camera;
    sceneRefs.controls = refs.controls;
    sceneRefs.scene = new THREE.Scene();

    // создаем небо
    const sky  = createSky()
    sceneRefs.scene.add(sky);
    sceneRefs.sky = sky;

    // создаем землю
    const ground  = createGround()
    sceneRefs.scene.add(ground);
    sceneRefs.ground = ground;
    
    // создаем свет
    init(sceneRefs.scene);
    
    //создаем куб
    const cube = createCube();
    sceneRefs.scene.add(cube);
    sceneRefs.cube = cube;
    
    // создаем свет от глаза (и сам глаз)
    eyeLight.init(sceneRefs.scene);
    eyeLight.syncPosition(cube.position.clone());

    //создаем дверь
    const door = createDoor();
    sceneRefs.scene.add(door);
    sceneRefs.door = door;

    // создаем зеркальный куб
    const mirrorCubeObj = createMirrorCube([2.5, 0.5, 0], 1);
    sceneRefs.scene.add(mirrorCubeObj.group);
    sceneRefs.mirrorCube = mirrorCubeObj;

    // --- Запуск анимационного цикла ---
    const animate = () => {
      if (sceneRefs.mirrorCube && sceneRefs.renderer && sceneRefs.scene) {
        sceneRefs.mirrorCube.update(sceneRefs.renderer, sceneRefs.scene);
      }
      if (sceneRefs.controls) sceneRefs.controls.update();
      if (sceneRefs.renderer && sceneRefs.scene && sceneRefs.camera) {
        sceneRefs.renderer.render(sceneRefs.scene, sceneRefs.camera);
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
  };

  // --- Реализация методов управления сценой ---
  const toggleAmbientLight = () => {
    toggle();
  };

  const moveCube = (direction: string) => {
    if (!sceneRefs.cube) return;
    moveCubeFn(sceneRefs.cube, direction, cubeMovementLimits);
    eyeLight.syncPosition(sceneRefs.cube.position.clone());
  };

  const teleportCube = () => {
    if (!sceneRefs.cube) return;
    teleportCubeFn(sceneRefs.cube, cubeMovementLimits);
    eyeLight.syncPosition(sceneRefs.cube.position.clone());
  };

  const toggleEyeLight = () => {
    eyeLight.toggle();
  };

  const setDoorSize = ({ width, height }: { width: number, height: number }) => {
    if (sceneRefs.door && typeof sceneRefs.door.setSize === 'function') {
      sceneRefs.door.setSize({ width, height });
    }
  };

  return {
    mount,
    toggleAmbientLight,
    toggleEyeLight,
    moveCube,
    teleportCube,
    setDoorSize,
  };
};
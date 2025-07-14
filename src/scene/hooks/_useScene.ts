import * as THREE from 'three';
import { useSky } from './useSky';
import { useGround } from './useGround';
import { useCube } from './useCube';
import { useEyeLight } from './useEyeLight';
import { useCoreSceneObjects } from './useCoreSceneObjects';
import { useLighting } from './useLighting';
import { useDoor } from './useDoor';
import { useMirrorCube } from './useMirrorCube';
import { cubeMovementLimits } from '../constants/main';

export const useScene = () => {
  let animationId: number | null = null;
  let minAreaMesh: THREE.Mesh | null = null;
  let maxAreaMesh: THREE.Mesh | null = null;

  const core = useCoreSceneObjects();
  const sky = useSky();
  const ground = useGround();
  const lighting = useLighting();
  const cube = useCube();
  const eye = useEyeLight();
  const door = useDoor();
  const mirror = useMirrorCube();

  // --- mount: инициализация сцены и всех объектов ---
  const mount = (canvas: HTMLCanvasElement) => {
    // Сцена
    core.create(canvas);
    const scene = core.getScene();
    if (!scene) throw new Error('Scene not initialized');

    // Небо
    sky.create();
    const skyObj = sky.get();
    if (skyObj) scene.add(skyObj);

    // Земля
    ground.create();
    const groundObj = ground.get();
    if (groundObj) scene.add(groundObj);

    // Свет
    lighting.create();
    toggleAmbientLight()

    // Куб
    cube.create();
    const cubeObj = cube.get();
    if (cubeObj) scene.add(cubeObj);

    // Глаз
    eye.create();
    const eyeGroup = eye.getGroup();
    if (eyeGroup) scene.add(eyeGroup);
    const eyeLight = eye.getLight();
    if (eyeLight) scene.add(eyeLight);
    // Синхронизируем свет глаза на куб
    const cubePos = cube.getCoordinates();
    if (cubePos) eye.syncPosition(cubePos);
    
    // // создаем свет от глаза (и сам глаз)
    // initEye(sceneRefs.scene);
    // syncPosition(cube.position.clone());

    // //создаем дверь
    // const door = createDoor();
    // sceneRefs.scene.add(door);
    // // lookAt()

       // --- Область передвижения куба ---
       const { sphereCenter, minDistance, maxDistance } = cubeMovementLimits;
       const ringSegments = 64;
       // Минимальный радиус
       const minGeometry = new THREE.RingGeometry(minDistance - 0.01, minDistance + 0.01, ringSegments);
       const minMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.5, transparent: true, side: THREE.DoubleSide });
       minAreaMesh = new THREE.Mesh(minGeometry, minMaterial);
       minAreaMesh.position.set(sphereCenter.x, 0.011, sphereCenter.z);
       minAreaMesh.rotation.x = -Math.PI / 2;
       scene.add(minAreaMesh);
       // Максимальный радиус
       const maxGeometry = new THREE.RingGeometry(maxDistance - 0.01, maxDistance + 0.01, ringSegments);
       const maxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 0.5, transparent: true, side: THREE.DoubleSide });
       maxAreaMesh = new THREE.Mesh(maxGeometry, maxMaterial);
       maxAreaMesh.position.set(sphereCenter.x, 0.012, sphereCenter.z);
       maxAreaMesh.rotation.x = -Math.PI / 2;
       scene.add(maxAreaMesh);


    // // создаем зеркальный куб
    // const mirrorCubeObj = createMirrorCube([1, 0.5, -1], 1);
    // sceneRefs.mirrorCube = mirrorCubeObj
    // sceneRefs.scene.add(mirrorCubeObj.group);

    // --- Запуск анимационного цикла ---
    const controls = core.getControls()
    const camera = core.getCamera()
    const renderer = core.getRenderer()
    const animate = () => {
      controls?.update();
      if (camera && renderer) renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return scene;
  };

  // --- методы управления сценой ---
  const toggleAmbientLight = () => {
    const { add, remove } = lighting.toggle();
    const scene = core.getScene();
    if (!scene) return;
    add.forEach(obj => scene.add(obj));
    remove.forEach(obj => scene.remove(obj));
  };

  const moveCube = (direction: string) => {
    cube.move(direction, cubeMovementLimits);
    // syncPosition(cube.getCoordinates()); // если нужно синхронизировать позицию
  };

  const teleportCube = () => {
    cube.teleport(cubeMovementLimits);
    // syncPosition(cube.getCoordinates()); // если нужно синхронизировать позицию
  };

  const toggleEyeLight = () => {
    const scene = core.getScene();
    if (!scene) return;

    eye.toggle();
    const eyeLight = eye.getLight();
    if (eyeLight && eye.getIsOn()) scene.add(eyeLight);
  };

  const setDoorSize = () => {
    // setSize({ width, height });
  };

  const destroy = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    if (minAreaMesh) {
      const scene = core.getScene();
      if (scene) scene.remove(minAreaMesh);
      minAreaMesh.geometry.dispose();
      (minAreaMesh.material as THREE.Material).dispose();
      minAreaMesh = null;
    }
    if (maxAreaMesh) {
      const scene = core.getScene();
      if (scene) scene.remove(maxAreaMesh);
      maxAreaMesh.geometry.dispose();
      (maxAreaMesh.material as THREE.Material).dispose();
      maxAreaMesh = null;
    }
    // Удаляем объекты и свет от глаза
    const scene = core.getScene();
    if (scene) {
      const eyeGroup = eye.getGroup();
      if (eyeGroup) scene.remove(eyeGroup);
      const eyeLight = eye.getLight();
      if (eyeLight) scene.remove(eyeLight);
    }
    eye.dispose();
    lighting.dispose();
    ground.dispose();
    sky.dispose();
    // ... dispose других объектов при необходимости
  };

  return {
    mount,
    destroy,
    toggleAmbientLight,
    toggleEyeLight,
    moveCube,
    teleportCube,
    setDoorSize,
  };
};
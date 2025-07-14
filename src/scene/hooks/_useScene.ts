import { useSky } from './useSky';
import { useGround } from './useGround';
import { useCube } from './useCube';
import { useEyeLight } from './useEyeLight';
import { useCoreSceneObjects } from './useCoreSceneObjects';
import { useLighting } from './useLighting';
import { useDoor } from './useDoor';
import { useMirrorCube } from './useMirrorCube';
import { cubeMovementLimits } from '../constants/main';
import { DOOR_SIZE, DOOR_POSITION } from '../constants/main';
import useLogger from './useLogger';

export const useScene = () => {
  let animationId: number | null = null;

  const core = useCoreSceneObjects();
  const sky = useSky();
  const ground = useGround();
  const lighting = useLighting();
  const cube = useCube();
  const eye = useEyeLight();
  const door = useDoor();
  const mirror = useMirrorCube();

  // non-null assertion - потому что инструкция очень простая и можно позволить сэкономить на количестве кода
  // --- mount: инициализация сцены и всех объектов ---
  const mount = (canvas: HTMLCanvasElement) => {
    // Сцена
    core.create(canvas);
    const scene = core.getScene();
    if (!scene) throw new Error('Scene not initialized');

    // Небо
    sky.create();
    scene.add(sky.get()!);

    // Земля
    ground.create();
    scene.add(ground.get()!);

    // Свет
    lighting.create();

    // Куб
    cube.create();
    scene.add(cube.get()!);

    // Глаз
    eye.create();
    scene.add(eye.getGroup()!);
    //включаем свет
    toggleEyeLight()
    // Синхронизируем свет глаза на куб
    eye.syncPosition(cube.getCoordinates()!);
    

    // Зеркальный куб 
    mirror.create([2, 0.5, -2], 1);
    scene.add(mirror.getGroup()!);

    // Дверь
    door.create({ width: DOOR_SIZE, height: DOOR_SIZE * 2, depth: 0.2, position: DOOR_POSITION });
    scene.add(door.get()!);
    door.lookAt(eye.getCoordinates()!)
    

    // Запуск анимационного цикла
    const controls = core.getControls()
    const camera = core.getCamera()
    const renderer = core.getRenderer()
    const logger = useLogger()
    logger.subscribe(camera?.position, 1000);
    
    const animate = () => {
      controls?.update();
      // Обновление отражения зеркального куба
      const updateMirror = mirror.getUpdate();
      if (updateMirror && renderer) updateMirror(renderer, scene);
      if (camera && renderer) renderer.render(scene, camera);
      
      animationId = requestAnimationFrame(animate);
      logger.tick();
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
    eye.syncPosition(cube.getCoordinates()!);
  };

  const teleportCube = () => {
    cube.teleport(cubeMovementLimits);
    eye.syncPosition(cube.getCoordinates()!);
  };

  const toggleEyeLight = () => {
    const scene = core.getScene();
    if (!scene) return;

    const eyeLight = eye.getLight();
    if (!eyeLight) return

    eye.toggle();

    eye.getIsOn() ? 
      scene.add(eyeLight) :
      scene.remove(eyeLight);
  }

  const setDoorSize = ({ width, height }: { width: number; height: number }) => {
    door.setSize({ width, height });
  };

  const destroy = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    // пока достаточно кор диспоза
    door.dispose();
    core.dispose();
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
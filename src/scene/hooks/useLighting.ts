import { AmbientLight, DirectionalLight, Scene } from 'three';

export const useLighting = () => {
  let ambientLight: AmbientLight | null = null;
  let directionalLight: DirectionalLight | null = null;
  let isLightOn = false; // по умолчанию свет выключен
  let sceneRef: Scene | null = null;

  // Инициализация: сохраняем сцену, свет не включаем
  const init = (scene: Scene) => {
    sceneRef = scene;
  };

  // Включить свет
  const createLighting = () => {
    if (!sceneRef) return;
    if (ambientLight || directionalLight) return; // уже включен
    ambientLight = new AmbientLight(0xffffff, 0.6);
    directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    sceneRef.add(ambientLight);
    sceneRef.add(directionalLight);
  };

  // Выключить свет
  const destroyLighting = () => {
    if (!sceneRef) return;
    if (ambientLight) {
      sceneRef.remove(ambientLight);
      ambientLight.dispose();
      ambientLight = null;
    }
    if (directionalLight) {
      sceneRef.remove(directionalLight);
      directionalLight.dispose();
      directionalLight = null;
    }
  };

  // Переключить свет
  const toggle = () => {
    if (!sceneRef) return;
    if (isLightOn) {
      destroyLighting();
      isLightOn = false;
    } else {
      createLighting();
      isLightOn = true;
    }
  };

  return {
    init,
    toggle
  };
}; 
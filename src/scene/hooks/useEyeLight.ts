import * as THREE from 'three';
import { EYE_SPHERE_RADIUS, EYE_SPHERE_SCALE, LIGHT_SPHERE_RADIUS, LIGHT_SPHERE2_RADIUS, LIGHT_SPHERE2_Y_OFFSET } from '../constants';

export const useEyeLight = () => {
  // --- Глаз (овал с градиентом) ---
  // Использую импортированные константы напрямую

  let sphere: THREE.Mesh | null = null;
  let lightSphere: THREE.Mesh | null = null;
  let lightSphere2: THREE.Mesh | null = null;
  let pointLight: THREE.PointLight | null = null;
  let sceneRef: THREE.Scene | null = null;
  let isOn = false;

  // Создать все объекты света глаза
  const create = () => {
    // --- Глаз ---
    const sphereGeometry = new THREE.SphereGeometry(EYE_SPHERE_RADIUS, 26, 90, 4);
    const gradSize = 256;
    const gradCanvas = document.createElement('canvas');
    gradCanvas.width = gradSize;
    gradCanvas.height = gradSize;
    const gradCtx = gradCanvas.getContext('2d');
    if (gradCtx) {
      const gradient = gradCtx.createLinearGradient(
        gradSize / 2, 0,
        gradSize / 2, gradSize
      );
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(0.4, '#000000');
      gradient.addColorStop(0.45, '#ff0000');
      gradient.addColorStop(0.55, '#ff0000');
      gradient.addColorStop(0.6, '#000000');
      gradient.addColorStop(1, '#000000');
      gradCtx.fillStyle = gradient;
      gradCtx.fillRect(0, 0, gradSize, gradSize);
    }
    const gradTexture = new THREE.CanvasTexture(gradCanvas);
    gradTexture.wrapS = THREE.ClampToEdgeWrapping;
    gradTexture.wrapT = THREE.ClampToEdgeWrapping;
    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: gradTexture,
      metalness: 0.1,
      roughness: 0.3
    });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(2.0, 1.9, 1.4);
    sphere.scale.set(EYE_SPHERE_SCALE.x, EYE_SPHERE_SCALE.y, EYE_SPHERE_SCALE.z);
    sphere.castShadow = false;

    // --- Прозрачная сфера вокруг глаза ---
    const lightSphereGeometry = new THREE.SphereGeometry(LIGHT_SPHERE_RADIUS, 15, 15);
    const sphereGradSize = 256;
    const sphereGradCanvas = document.createElement('canvas');
    sphereGradCanvas.width = sphereGradSize;
    sphereGradCanvas.height = sphereGradSize;
    const sphereGradCtx = sphereGradCanvas.getContext('2d');
    if (sphereGradCtx) {
      const grad = sphereGradCtx.createRadialGradient(
        sphereGradSize / 2, sphereGradSize / 2, sphereGradSize / 8,
        sphereGradSize / 2, sphereGradSize / 2, sphereGradSize / 2
      );
      grad.addColorStop(0, '#0000FF');
      grad.addColorStop(1, '#ff0000');
      sphereGradCtx.fillStyle = grad;
      sphereGradCtx.fillRect(0, 0, sphereGradSize, sphereGradSize);
    }
    const lightSphereTexture = new THREE.CanvasTexture(sphereGradCanvas);
    lightSphereTexture.wrapS = THREE.ClampToEdgeWrapping;
    lightSphereTexture.wrapT = THREE.ClampToEdgeWrapping;
    const lightSphereMaterial = new THREE.MeshStandardMaterial({ 
      map: lightSphereTexture,
      transparent: true,
      opacity: 0.6,
      roughness: 0.3,
      metalness: 0.1
    });
    lightSphere = new THREE.Mesh(lightSphereGeometry, lightSphereMaterial);
    lightSphere.position.copy(sphere.position);
    lightSphere.castShadow = true;

    // --- Вторая невидимая сфера для света ---
    const lightSphere2Geometry = new THREE.SphereGeometry(LIGHT_SPHERE2_RADIUS, 20, 20);
    const lightSphere2Material = new THREE.MeshBasicMaterial({ visible: false });
    lightSphere2 = new THREE.Mesh(lightSphere2Geometry, lightSphere2Material);
    lightSphere2.position.copy(sphere.position);
    lightSphere2.position.y += LIGHT_SPHERE2_Y_OFFSET;

    // --- Точечный источник света (глаз) ---
    pointLight = new THREE.PointLight(0xffffff, 10, 40);
    pointLight.castShadow = true;
  };

  const addSpheres = () => {
    if (!sceneRef || !sphere || !lightSphere || !lightSphere2) return;
    sceneRef.add(sphere);
    sceneRef.add(lightSphere);
    sceneRef.add(lightSphere2);
  };

  // Добавить объекты в сцену
  const addLight = () => {
    if (!sceneRef || !pointLight) return;
    sceneRef.add(pointLight);
  };

  // Убрать объекты из сцены
  const removeLight = () => {
    if (!sceneRef  || !pointLight) return;
    sceneRef.remove(pointLight);
  };

  // Инициализация: создаём объекты и добавляем в сцену (по умолчанию включено)
  const init = (scene: THREE.Scene) => {
    sceneRef = scene;
    if (!sphere) create();
    addLight();
    addSpheres();
    isOn = true;
  };

  // Переключить свет от глаза
  const toggle = () => {
    if (!sceneRef) return;
    if (isOn) {
      removeLight();
      isOn = false;
    } else {
      addLight();
      isOn = true;
    }
  };

  // Метод для синхронизации позиции PointLight
  const syncPosition = (position: THREE.Vector3) => {
    if (!lightSphere2 || !pointLight) return;
    const eyeCenter = lightSphere2.position.clone();
    const direction = position.clone().sub(eyeCenter).normalize();
    const pointLightPos = eyeCenter.clone().add(direction.multiplyScalar(LIGHT_SPHERE2_RADIUS));
    pointLight.position.copy(pointLightPos);
  };

  return {
    init,
    toggle,
    syncPosition,
  };
}; 
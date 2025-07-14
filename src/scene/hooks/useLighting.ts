import * as THREE from 'three';

export const useLighting = () => {
  let ambientLight: THREE.AmbientLight | null = null;
  let directionalLight: THREE.DirectionalLight | null = null;
  let isLightOn = false;

  const create = () => {
    if (ambientLight || directionalLight) return;
    ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    const d = 15;
    directionalLight.shadow.camera.left = -d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = -d;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 50;
  };

  const getAmbient = () => ambientLight;
  const getDirectional = () => directionalLight;
  const getState = () => isLightOn;

  const dispose = () => {
    ambientLight?.dispose();
    directionalLight?.dispose();
    ambientLight = null;
    directionalLight = null;
    isLightOn = false;
  };

  const toggle = () => {
    const add: THREE.Object3D[] = [];
    const remove: THREE.Object3D[] = [];

    isLightOn ? 
    (() => {
      if (ambientLight) remove.push(ambientLight);
      if (directionalLight) remove.push(directionalLight);
      dispose();
      isLightOn = false
    })() : 
    (() => {
      create();
      if (ambientLight) add.push(ambientLight);
      if (directionalLight) add.push(directionalLight);
      isLightOn = true
    })()

    return { add, remove };
  };

  return {
    create,
    getAmbient,
    getDirectional,
    getState,
    dispose,
    toggle,
  };
}; 
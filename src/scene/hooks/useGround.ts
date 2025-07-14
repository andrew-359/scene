import * as THREE from 'three';
import { GROUND_SIZE } from '../constants/main';

// Константы только для земли
const GROUND_COLOR = '#228B22';
const GROUND_METALNESS = 0.1;
const GROUND_ROUGHNESS = 0.8;

export const useGround = () => {
  let ground: THREE.Mesh | null = null;

  const create = () => {
    const groundGeometry = new THREE.PlaneGeometry(GROUND_SIZE, GROUND_SIZE);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: GROUND_COLOR,
      metalness: GROUND_METALNESS,
      roughness: GROUND_ROUGHNESS
    });
    ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    return ground;
  };

  const get = () => ground;

  const dispose = () => {
    ground = null;
  };

  return {
    create,
    get,
    dispose,
  };
}; 
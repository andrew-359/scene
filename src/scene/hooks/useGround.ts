import { Mesh, MeshStandardMaterial, PlaneGeometry } from 'three';
import { GROUND_SIZE } from '../constants';

// Константы только для земли
const GROUND_COLOR = '#228B22';
const GROUND_METALNESS = 0.1;
const GROUND_ROUGHNESS = 0.8;

export const useGround = () => {
  const createGround = () => {
    const groundGeometry = new PlaneGeometry(GROUND_SIZE, GROUND_SIZE);
    const groundMaterial = new MeshStandardMaterial({
      color: GROUND_COLOR,
      metalness: GROUND_METALNESS,
      roughness: GROUND_ROUGHNESS
    });
    const ground = new Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    return ground;
  };

  return {
    createGround
  };
}; 
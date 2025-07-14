import * as THREE from 'three';
import boxTextureUrl from '../../assets/box.png';
import { CUBE_SIZE, CUBE_POSITION } from '../constants/main';
import { getCubeFaceMaterials } from '../utils/materials';
import { getNewPosition } from '../utils/movment'

export type CubeMovementLimits = {
  groundSize: number;
  cubeSize: number;
  sphereCenter: { x: number; y: number; z: number };
  minDistance: number;
  maxDistance: number;
};

// Константы только для куба
const FACE_TEXTURE_SIZE = 256;
const OUTLINE_BORDER = 12;

export const useCube = () => {
  let cube: THREE.Mesh | null = null;

  const create = () => {
    const faceMaterials = getCubeFaceMaterials(boxTextureUrl, FACE_TEXTURE_SIZE, OUTLINE_BORDER);
    cube = new THREE.Mesh(
      new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE),
      faceMaterials
    );
    cube.position.set(...CUBE_POSITION);
    cube.castShadow = true;
    cube.receiveShadow = true;
    return cube;
  };

  const get = () => cube;

  const move = (
    direction: string,
    limits: CubeMovementLimits
  ) => {
    if (!cube) return;
    const step = 1;
    // Новая позиция через lookup-таблицу
    const newPos = getNewPosition(direction, cube.position, step);
    const { groundSize, cubeSize, sphereCenter, minDistance, maxDistance } = limits;
    const halfGround = groundSize / 2 - cubeSize / 2;
    newPos.x = Math.max(-halfGround, Math.min(halfGround, newPos.x));
    newPos.z = Math.max(-halfGround, Math.min(halfGround, newPos.z));
    const dx = newPos.x - sphereCenter.x;
    const dz = newPos.z - sphereCenter.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    if (dist < minDistance) return;
    if (dist > maxDistance) return;
    cube.position.copy(newPos);
  };

  const teleport = (
    limits: CubeMovementLimits
  ) => {
    if (!cube) return;
    const { groundSize, cubeSize, sphereCenter, minDistance, maxDistance } = limits;
    const halfGround = groundSize / 2 - cubeSize / 2;
    for (let tries = 0; tries < 30; tries++) {
      const x = Math.random() * (halfGround * 2) - halfGround;
      const z = Math.random() * (halfGround * 2) - halfGround;
      const pos = new THREE.Vector3(x, cube.position.y, z);
      const dx = x - sphereCenter.x;
      const dz = z - sphereCenter.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < minDistance) continue;
      if (dist > maxDistance) continue;
      cube.position.copy(pos);
      return;
    }
  };

  const getCoordinates = () => {
    if (!cube) return null;
    return cube.position.clone();
  };

  const dispose = () => {
    cube = null;
  };

  return {
    create,
    get,
    move,
    teleport,
    getCoordinates,
    dispose,
  };
}; 
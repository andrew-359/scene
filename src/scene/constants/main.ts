import { CubeMovementLimits } from "../types";

export const GROUND_SIZE = 50;
export const CUBE_SIZE = 1;
export const CUBE_POSITION: [number, number, number] = [-2, 0.51, -2];
export const DOOR_SIZE = 1.5;
export const DOOR_POSITION: [number, number, number] = [-2.5, 0, 2.5];
export const EYE_SPHERE_RADIUS = 0.5;
export const EYE_SPHERE_SCALE = { x: 0.2, y: 1.8, z: 0.3 };
export const LIGHT_SPHERE_RADIUS = 1.1;
export const LIGHT_SPHERE2_RADIUS = 1.25;
export const LIGHT_SPHERE2_Y_OFFSET = 0.3;
export const SPHERE_CENTER = { x: 2.0, y: 1.9 + 0.3, z: 1.4 }; 

//точка расширения под коллизию
// склеивать карты всех объектов и через createMovmentMap их кидать в объект движения
export const cubeMovementLimits: CubeMovementLimits = {
    groundSize: GROUND_SIZE,
    cubeSize: CUBE_SIZE,
    sphereCenter: SPHERE_CENTER,
    minDistance: LIGHT_SPHERE2_RADIUS + CUBE_SIZE / 2 + 0.2,
    maxDistance: 9,
  };
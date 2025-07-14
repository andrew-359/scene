import { Vector3 } from "three";

const directionTable: Record<string, [number, number, number]> = {
  left: [-1, 0, 0],
  right: [1, 0, 0],
  forward: [0, 0, -1],
  back: [0, 0, 1],
} as const;

export function getNewPosition(
  direction: string,
  currentPosition: Vector3,
  step = 1
): Vector3 {
  const offset = directionTable[direction];
  if (!offset) return currentPosition.clone();
  return currentPosition.clone().add(new Vector3(
    offset[0] * step,
    offset[1] * step,
    offset[2] * step
  ));
}



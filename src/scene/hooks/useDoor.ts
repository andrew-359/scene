import { DOOR_SIZE, DOOR_POSITION } from '../constants/main';
import {
  Mesh, MeshStandardMaterial, BoxGeometry, Group, SphereGeometry, Vector3
} from 'three';

export interface DoorGroup extends Group {
  setSize: (size: { width?: number; height?: number; depth?: number }) => void;
}

export const useDoor = () => {
  let currentDoor: DoorGroup | null = null;

  function createDoor({ width = DOOR_SIZE, height = DOOR_SIZE * 2, depth = 0.2, position = DOOR_POSITION } = {}): DoorGroup {
    const group = new Group() as DoorGroup;
    let door: Mesh, top: Mesh, bottom: Mesh, left: Mesh, right: Mesh, frontHandle: Mesh, backHandle: Mesh;

    function build() {
      group.clear();
      // Материалы
      const doorMaterial = new MeshStandardMaterial({ color: 0x8B5A2B, roughness: 0.5, metalness: 0.2 }); // коричневая дверь
      const frameMaterial = new MeshStandardMaterial({ color: 0x5C4033, roughness: 0.7, metalness: 0.1 }); // тёмно-коричневые косяки
      const handleMaterial = new MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.2 }); // металлические ручки
      // Дверь
      const doorGeom = new BoxGeometry(width, height, depth);
      door = new Mesh(doorGeom, doorMaterial);
      door.position.set(position[0], position[1], position[2]);
      // Косяки
      const frameThickness = 0.1 * width;
      const frameDepth = depth + 0.05;
      const frameHeight = height + frameThickness * 2;
      const frameWidth = width + frameThickness * 2;
      // Верхний и нижний
      const topGeom = new BoxGeometry(frameWidth, frameThickness, frameDepth);
      top = new Mesh(topGeom, frameMaterial);
      top.position.set(position[0], position[1] + height / 2 + frameThickness / 2, position[2]);
      bottom = new Mesh(topGeom, frameMaterial);
      bottom.position.set(position[0], position[1] - height / 2 - frameThickness / 2, position[2]);
      // Боковые
      const sideGeom = new BoxGeometry(frameThickness, frameHeight, frameDepth);
      left = new Mesh(sideGeom, frameMaterial);
      left.position.set(position[0] - width / 2 - frameThickness / 2, position[1], position[2]);
      right = new Mesh(sideGeom, frameMaterial);
      right.position.set(position[0] + width / 2 + frameThickness / 2, position[1], position[2]);
      // Ручки
      const handleRadius = 0.06 * width;
      const yHandle = position[1] + 0.3 * height / 2;
      const xLeft = position[0] - width / 2 + handleRadius * 1.2;
      frontHandle = new Mesh(new SphereGeometry(handleRadius, 24, 24), handleMaterial);
      frontHandle.position.set(xLeft, yHandle, position[2] + depth / 2 + handleRadius);
      backHandle = new Mesh(new SphereGeometry(handleRadius, 24, 24), handleMaterial);
      backHandle.position.set(xLeft, yHandle, position[2] - depth / 2 - handleRadius);
      // Группа
      group.add(door, top, bottom, left, right, frontHandle, backHandle);
    }

    build();

    group.setSize = ({ width: w, height: h, depth: d }: { width?: number, height?: number, depth?: number }) => {
      width = w ?? width;
      height = h ?? height;
      depth = d ?? depth;
      build();
    };

    currentDoor = group;
    return group;
  }

  function setSize(size: { width?: number; height?: number; depth?: number }) {
    if (currentDoor && typeof currentDoor.setSize === 'function') {
      currentDoor.setSize(size);
    }
  }

  function lookAt(target: Vector3 | [number, number, number]) {
    if (!currentDoor) return;
    const vec = (target instanceof Vector3 ? target : new Vector3(...target));
    vec.y = currentDoor.position.y; // только по горизонтали
    currentDoor.lookAt(vec);
  }

  return {
    createDoor,
    setSize,
    lookAt,
  };
}; 
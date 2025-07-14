import { DOOR_SIZE, DOOR_POSITION } from '../constants/main';
import {
  Mesh, BoxGeometry, Group, SphereGeometry, Vector3, MeshStandardMaterial
} from 'three';
import { createCartoonWoodMaterial } from '../utils/materials';

export interface DoorGroup extends Group {
  setSize: (size: { width?: number; height?: number; depth?: number }) => void;
}

export const useDoor = () => {
  let currentDoor: DoorGroup | null = null;

  const create = ({ width = DOOR_SIZE, height = DOOR_SIZE * 2, depth = 0.2, position = DOOR_POSITION } = {}): DoorGroup => {
    const group = new Group() as DoorGroup;
    let door: Mesh, top: Mesh, bottom: Mesh, left: Mesh, right: Mesh, frontHandle: Mesh, backHandle: Mesh;

    const build = () => {
      group.clear();
      // Материалы
      const doorMaterial = createCartoonWoodMaterial();
      const frameMaterial = new MeshStandardMaterial({ color: 0x5C4033, roughness: 0.7, metalness: 0.1 }); // тёмно-коричневые косяки
      const handleMaterial = new MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.2 }); // металлические ручки
      // Дверь
      const doorGeom = new BoxGeometry(width, height, depth);
      door = new Mesh(doorGeom, doorMaterial);
      door.position.set(0, height / 2, 0); // центр полотна над порогом
      door.castShadow = true;
      door.receiveShadow = true;
      // Косяки
      const frameThickness = 0.1; // фиксированная толщина
      const frameDepth = depth + 0.05;
      const frameHeight = height + frameThickness * 2;
      const frameWidth = width + frameThickness * 2;
      // Верхний и нижний
      const topGeom = new BoxGeometry(frameWidth, frameThickness, frameDepth);
      top = new Mesh(topGeom, frameMaterial);
      top.position.set(0, height + frameThickness / 2, 0); // над полотном
      top.castShadow = true;
      top.receiveShadow = true;
      bottom = new Mesh(topGeom, frameMaterial);
      bottom.position.set(0, -frameThickness / 2, 0); // под порогом
      bottom.castShadow = true;
      bottom.receiveShadow = true;
      // Боковые
      const sideGeom = new BoxGeometry(frameThickness, height, frameDepth);
      left = new Mesh(sideGeom, frameMaterial);
      left.position.set(-width / 2 - frameThickness / 2, height / 2, 0);
      left.castShadow = true;
      left.receiveShadow = true;
      right = new Mesh(sideGeom, frameMaterial);
      right.position.set(width / 2 + frameThickness / 2, height / 2, 0);
      right.castShadow = true;
      right.receiveShadow = true;
      // Ручка (фиксированная)
      const handleRadius = 0.08; // фиксированный радиус
      // yHandle теперь относительно порога
      const yHandle = height * 0.33;
      const xLeft = -width / 2 + handleRadius * 2;
      frontHandle = new Mesh(new SphereGeometry(handleRadius, 24, 24), handleMaterial);
      frontHandle.position.set(xLeft, yHandle, depth / 2 + handleRadius);
      backHandle = new Mesh(new SphereGeometry(handleRadius, 24, 24), handleMaterial);
      backHandle.position.set(xLeft, yHandle, -depth / 2 - handleRadius);
      // Группа
      group.add(door, top, bottom, left, right, frontHandle, backHandle);
      // Позиционируем всю дверь в сцене (position[1] — уровень пола)
      group.position.set(position[0], position[1], position[2]);
    };

    build();

    group.setSize = ({ width: w, height: h, depth: d }: { width?: number, height?: number, depth?: number }) => {
      width = w ?? width;
      height = h ?? height;
      depth = d ?? depth;
      build();
    };

    currentDoor = group;
    return group;
  };

  const get = () => currentDoor;

  const setSize = (size: { width?: number; height?: number; depth?: number }) => {
    if (currentDoor && typeof currentDoor.setSize === 'function') {
      currentDoor.setSize(size);
    }
  };

  const lookAt = (target: Vector3 | [number, number, number]) => {
    if (!currentDoor) return;
    const vec = (target instanceof Vector3 ? target : new Vector3(...target));
    vec.y = currentDoor.position.y; // только по горизонтали
    currentDoor.lookAt(vec);
  };

  const dispose = () => {
    if (currentDoor) {
      currentDoor.clear();
    }
    currentDoor = null;
  };

  return {
    create,
    get,
    setSize,
    lookAt,
    dispose,
  };
}; 
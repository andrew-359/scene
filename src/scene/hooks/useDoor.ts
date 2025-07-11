import { DOOR_SIZE, DOOR_POSITION } from '../constants';
import {
  Mesh, MeshStandardMaterial, BoxGeometry, Group, SphereGeometry, CanvasTexture
} from 'three';

const createWoodTexture = (width: number, height: number): CanvasTexture => {
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(256 * (width / 1.5));
  canvas.height = Math.round(512 * (height / 3));
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#b98c5a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const plankCount = 4;
  Array.from({ length: plankCount }).forEach((_, i) => {
    const x = (i * canvas.width) / plankCount;
    const w = canvas.width / plankCount - 6 + Math.random() * 8;
    ctx.fillStyle = i % 2 === 0 ? '#cfa66a' : '#a97c50';
    ctx.fillRect(x, 0, w, canvas.height);
    if (i > 0) {
      ctx.strokeStyle = '#7a5a36';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  });
  Array.from({ length: 12 }).forEach((_, i) => {
    ctx.strokeStyle = 'rgba(120, 80, 40, 0.18)';
    ctx.lineWidth = 2 + Math.random() * 2;
    ctx.beginPath();
    let y = Math.random() * canvas.height;
    ctx.moveTo(0, y);
    for (let x = 0; x < canvas.width; x += 16) {
      y += Math.sin(x / 32 + i) * 2 + Math.random() * 2 - 1;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  });
  const texture = new CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = 1000; // RepeatWrapping
  texture.repeat.set(1, 1);
  return texture;
};

const createBrownTexture = (): CanvasTexture => {
  const size = 32;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#7a4a1a';
  ctx.fillRect(0, 0, size, size);
  return new CanvasTexture(canvas);
};

export interface DoorGroup extends Group {
  setSize: (size: { width?: number; height?: number; depth?: number }) => void;
}

export const useDoor = () => {
  function createDoor({ width = DOOR_SIZE, height = DOOR_SIZE * 2, depth = 0.2, position = DOOR_POSITION } = {}): DoorGroup {
    const group = new Group() as DoorGroup;
    let door: Mesh, top: Mesh, bottom: Mesh, left: Mesh, right: Mesh, frontHandle: Mesh, backHandle: Mesh;

    function build() {
      group.clear();
      // Дверь
      const doorGeom = new BoxGeometry(width, height, depth);
      const doorMat = new MeshStandardMaterial({ color: 0xffffff, map: createWoodTexture(width, height) });
      door = new Mesh(doorGeom, doorMat);
      door.position.set(position[0], position[1], position[2]);
      door.castShadow = true;
      door.receiveShadow = true;
      // Косяки
      const frameMaterial = new MeshStandardMaterial({ color: 0x7a4a1a, map: createBrownTexture() });
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
      const handleMaterial = new MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.95, roughness: 0.25 });
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

    return group;
  }

  return {
    createDoor,
  };
}; 
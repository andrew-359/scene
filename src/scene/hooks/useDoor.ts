import { Mesh, MeshStandardMaterial, CanvasTexture, ClampToEdgeWrapping, RepeatWrapping, BoxGeometry, SphereGeometry, Group } from 'three';
import { DOOR_SIZE, DOOR_POSITION } from '../constants';

const createWoodTexture = (): CanvasTexture => {
  const width = 256;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#b98c5a';
  ctx.fillRect(0, 0, width, height);

  // Рисуем доски (вертикальные полосы)
  const plankCount = 4;
  Array.from({ length: plankCount }).forEach((_, i) => {
    const x = (i * width) / plankCount;
    const w = width / plankCount - 6 + Math.random() * 8;
    ctx.fillStyle = i % 2 === 0 ? '#cfa66a' : '#a97c50';
    ctx.fillRect(x, 0, w, height);
    if (i > 0) {
      ctx.strokeStyle = '#7a5a36';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
  });

  // Имитация текстуры дерева (случайные волнистые линии)
  Array.from({ length: 12 }).forEach((_, i) => {
    ctx.strokeStyle = 'rgba(120, 80, 40, 0.18)';
    ctx.lineWidth = 2 + Math.random() * 2;
    ctx.beginPath();
    let y = Math.random() * height;
    ctx.moveTo(0, y);
    for (let x = 0; x < width; x += 16) {
      y += Math.sin(x / 32 + i) * 2 + Math.random() * 2 - 1;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  });

  const texture = new CanvasTexture(canvas);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);
  return texture;
}

 const createBrownTexture = (): CanvasTexture => {
  const size = 32;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#7a4a1a';
  ctx.fillRect(0, 0, size, size);
  return new CanvasTexture(canvas);
}

export const useDoor = () => {
  const createDoor = () => {
    // Дверь
    const geometry = new BoxGeometry(DOOR_SIZE, DOOR_SIZE * 2, 0.2);
    const material = new MeshStandardMaterial({ 
      color: 0xffffff, 
      map: createWoodTexture(),
    });
    const door = new Mesh(geometry, material);
    door.position.set(...DOOR_POSITION);
    door.castShadow = true;
    door.receiveShadow = true;

    // Косяки 
    const frameMaterial = new MeshStandardMaterial({
      color: 0x7a4a1a,
      map: createBrownTexture(),
    });
    const frameThickness = 0.15;
    const frameDepth = 0.25;
    const frameHeight = DOOR_SIZE * 2 + frameThickness * 2;
    const frameWidth = DOOR_SIZE + frameThickness * 2;
    // Верхний косяк
    const topGeom = new BoxGeometry(frameWidth, frameThickness, frameDepth);
    const top = new Mesh(topGeom, frameMaterial);
    top.position.set(DOOR_POSITION[0], DOOR_POSITION[1] + DOOR_SIZE + frameThickness / 2, DOOR_POSITION[2]);
    // Нижний косяк
    const bottom = new Mesh(topGeom, frameMaterial);
    bottom.position.set(DOOR_POSITION[0], DOOR_POSITION[1] - DOOR_SIZE - frameThickness / 2, DOOR_POSITION[2]);
    // Боковые косяки
    const sideGeom = new BoxGeometry(frameThickness, frameHeight, frameDepth);
    const left = new Mesh(sideGeom, frameMaterial);
    left.position.set(DOOR_POSITION[0] - (DOOR_SIZE / 2 + frameThickness / 2), DOOR_POSITION[1], DOOR_POSITION[2]);
    const right = new Mesh(sideGeom, frameMaterial);
    right.position.set(DOOR_POSITION[0] + (DOOR_SIZE / 2 + frameThickness / 2), DOOR_POSITION[1], DOOR_POSITION[2]);

    // Группа дверь+косяки
    const group = new Group();
    group.add(door);
    group.add(top);
    group.add(bottom);
    group.add(left);
    group.add(right);

    // Ручки
    const handleRadius = 0.09;
    const handleMaterial = new MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 0.95,
      roughness: 0.25,
    });
    const yHandle = DOOR_POSITION[1] + 0.3;
    const xLeft = DOOR_POSITION[0] - DOOR_SIZE / 2 + handleRadius * 1.2;
    const frontHandle = new Mesh(new SphereGeometry(handleRadius, 24, 24), handleMaterial);
    frontHandle.position.set(
      xLeft,
      yHandle,
      DOOR_POSITION[2] + 0.15
    );
    const backHandle = new Mesh(new SphereGeometry(handleRadius, 24, 24), handleMaterial);
    backHandle.position.set(
      xLeft,
      yHandle,
      DOOR_POSITION[2] - 0.15
    );
    group.add(frontHandle);
    group.add(backHandle);

    return group;
  };

  return {
    createDoor,
  };
}; 
import { Mesh, MeshStandardMaterial, CanvasTexture, ClampToEdgeWrapping, BoxGeometry, Vector3 } from 'three';
import boxTextureUrl from '../../assets/box.png';
import { CUBE_SIZE, CUBE_POSITION } from '../constants';

// Константы только для куба
const FACE_TEXTURE_SIZE = 256;
const OUTLINE_BORDER = 12;

export const useCube = () => {
  const createCube = () => {
    const faceMaterials: MeshStandardMaterial[] = [];
    
    // Создаём материалы для каждой грани
    for (let face = 0; face < 6; face++) {
      const outlineCanvas = document.createElement('canvas');
      outlineCanvas.width = FACE_TEXTURE_SIZE;
      outlineCanvas.height = FACE_TEXTURE_SIZE;
      const ctx = outlineCanvas.getContext('2d');
      if (ctx) {
        const img = new window.Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, FACE_TEXTURE_SIZE, FACE_TEXTURE_SIZE);
          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, FACE_TEXTURE_SIZE, OUTLINE_BORDER);
          ctx.fillRect(0, FACE_TEXTURE_SIZE - OUTLINE_BORDER, FACE_TEXTURE_SIZE, OUTLINE_BORDER);
          ctx.fillRect(0, 0, OUTLINE_BORDER, FACE_TEXTURE_SIZE);
          ctx.fillRect(FACE_TEXTURE_SIZE - OUTLINE_BORDER, 0, OUTLINE_BORDER, FACE_TEXTURE_SIZE);
          ctx.save();
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 7;
          ctx.beginPath();
          const startX = Math.random() * (FACE_TEXTURE_SIZE - 80) + 40;
          const startY = Math.random() * (FACE_TEXTURE_SIZE - 80) + 40;
          ctx.moveTo(startX, startY);
          for (let j = 0; j < 4; j++) {
            const cp1x = startX + Math.random() * 100 - 50;
            const cp1y = startY + Math.random() * 100 - 50;
            const endX = startX + Math.random() * 120 - 60;
            const endY = startY + Math.random() * 120 - 60;
            ctx.bezierCurveTo(cp1x, cp1y, cp1x, cp1y, endX, endY);
          }
          ctx.stroke();
          ctx.restore();
          const outlineTexture = new CanvasTexture(outlineCanvas);
          outlineTexture.wrapS = ClampToEdgeWrapping;
          outlineTexture.wrapT = ClampToEdgeWrapping;
          faceMaterials[face] = new MeshStandardMaterial({
            metalness: 0.2,
            roughness: 0.6,
            map: outlineTexture
          });
        };
        img.src = boxTextureUrl;
      }
    }
    
    // Создаём куб с материалами
    const geometry = new BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
    const cube = new Mesh(geometry, faceMaterials);
    cube.position.set(...CUBE_POSITION);
    cube.castShadow = true;
    cube.receiveShadow = true;
    
    return cube;
  };

  const moveCube = (
    cube: Mesh,
    direction: string,
    options?: {
      groundSize: number,
      cubeSize: number,
      sphereCenter: { x: number, y: number, z: number },
      minDistance: number,
      maxDistance: number
    }
  ) => {
    if (!cube) return;
    const step = 1;
    // Копируем текущую позицию
    const newPos = cube.position.clone();
    switch (direction) {
      case 'left':
        newPos.x -= step;
        break;
      case 'right':
        newPos.x += step;
        break;
      case 'forward':
        newPos.z -= step;
        break;
      case 'back':
        newPos.z += step;
        break;
    }
    // Если нет ограничений — просто двигаем
    if (!options) {
      cube.position.copy(newPos);
      return;
    }
    const { groundSize, cubeSize, sphereCenter, minDistance, maxDistance } = options;
    // Ограничение по земле
    const halfGround = groundSize / 2 - cubeSize / 2;
    newPos.x = Math.max(-halfGround, Math.min(halfGround, newPos.x));
    newPos.z = Math.max(-halfGround, Math.min(halfGround, newPos.z));
    // Ограничение по расстоянию до сферы
    const dx = newPos.x - sphereCenter.x;
    const dz = newPos.z - sphereCenter.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    if (dist < minDistance) return;
    if (dist > maxDistance) return;
    cube.position.copy(newPos);
  };

  const teleportCube = (
    cube: Mesh,
    options?: {
      groundSize: number,
      cubeSize: number,
      sphereCenter: { x: number, y: number, z: number },
      minDistance: number,
      maxDistance: number
    }
  ) => {
    if (!cube) return;
    if (!options) {
      const range = 20;
      cube.position.x = (Math.random() - 0.5) * range;
      cube.position.z = (Math.random() - 0.5) * range;
      return;
    }
    const { groundSize, cubeSize, sphereCenter, minDistance, maxDistance } = options;
    const halfGround = groundSize / 2 - cubeSize / 2;
    let tries = 0;
    //TODO
    while (tries < 100) {
      const x = Math.random() * (halfGround * 2) - halfGround;
      const z = Math.random() * (halfGround * 2) - halfGround;
      const dx = x - sphereCenter.x;
      const dz = z - sphereCenter.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist >= minDistance && dist <= maxDistance) {
        cube.position.x = x;
        cube.position.z = z;
        return;
      }
      tries++;
    }
  };

  return {
    createCube,
    moveCube,
    teleportCube,
  };
}; 
import { MeshStandardMaterial, CanvasTexture, RepeatWrapping } from 'three';


export const getCubeFaceMaterials = (boxTextureUrl: string, FACE_TEXTURE_SIZE: number, OUTLINE_BORDER: number): MeshStandardMaterial[] => {
    const faceMaterials: MeshStandardMaterial[] = [];
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
          outlineTexture.wrapS = 1000; // ClampToEdgeWrapping
          outlineTexture.wrapT = 1000;
          faceMaterials[face] = new MeshStandardMaterial({
            metalness: 0.2,
            roughness: 0.6,
            map: outlineTexture
          });
        };
        img.src = boxTextureUrl;
      }
    }
    
    return faceMaterials;
  }

export function createCartoonWoodMaterial(width = 256, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Светлый фон
  ctx.fillStyle = '#e6c89f'; // светло-бежевый
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = '#b98c5a';
  ctx.lineWidth = 6;
  ctx.globalAlpha = 0.25;
  for (let i = 0; i < 18; i++) {
    ctx.beginPath();
    const y = (i / 18) * height;
    ctx.moveTo(0, y);
    for (let x = 0; x < width; x++) {
      ctx.lineTo(x, y + Math.sin(x / 30 + i) * 7);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  const knots = [
    { x: 0.2, y: 0.3, r: 18, angle: 0.2 },
    { x: 0.4, y: 0.7, r: 14, angle: 0.7 },
    { x: 0.6, y: 0.5, r: 16, angle: 1.1 },
    { x: 0.8, y: 0.2, r: 12, angle: 0.5 },
    { x: 0.7, y: 0.8, r: 15, angle: 0.9 },
  ];
  for (const knot of knots) {
    const knotX = knot.x * width;
    const knotY = knot.y * height;
    const knotR = knot.r;
    ctx.save();
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.ellipse(knotX, knotY, knotR, knotR * 0.9, knot.angle, 0, Math.PI * 2);
    ctx.fillStyle = '#b98c5a';
    ctx.fill();
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.ellipse(knotX, knotY, knotR * 0.5, knotR * 0.3, knot.angle + 0.5, 0, Math.PI * 2);
    ctx.fillStyle = '#a67c52';
    ctx.fill();
    ctx.restore();
  }

  const texture = new CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = 1000; // ClampToEdgeWrapping
  texture.repeat.set(1, 1);

  return new MeshStandardMaterial({
    map: texture,
    roughness: 0.5,
    metalness: 0.15
  });
}
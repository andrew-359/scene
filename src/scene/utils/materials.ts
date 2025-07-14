import { MeshStandardMaterial, CanvasTexture } from 'three';


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
import * as THREE from 'three';

// Константы только для неба
const SKY_SEGMENTS_WIDTH = 16;
const SKY_SEGMENTS_HEIGHT = 12;
const SKY_SIZE = 1024;
const STAR_COUNT = 400;
const STAR_MIN_RADIUS = 0.2;
const STAR_MAX_RADIUS = 0.7;
const STAR_GREEN_PROB = 0.05;
const STAR_RED_PROB = 0.05;
const SKY_COLOR = '#01030a';
const SKY_RADIUS = 24; // Пример: радиус меньше земли

export const useSky = () => {
  const createSky = () => {
    const skyGeometry = new THREE.SphereGeometry(SKY_RADIUS, SKY_SEGMENTS_WIDTH, SKY_SEGMENTS_HEIGHT);
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = SKY_SIZE;
    skyCanvas.height = SKY_SIZE;
    const skyCtx = skyCanvas.getContext('2d');
    if (skyCtx) {
      skyCtx.fillStyle = SKY_COLOR;
      skyCtx.fillRect(0, 0, SKY_SIZE, SKY_SIZE);
      for (let i = 0; i < STAR_COUNT; i++) {
        const x = Math.random() * SKY_SIZE;
        const y = Math.random() * SKY_SIZE;
        const r = Math.random() * (STAR_MAX_RADIUS - STAR_MIN_RADIUS) + STAR_MIN_RADIUS;
        let color = 'white';
        const colorRand = Math.random();
        if (colorRand < STAR_GREEN_PROB) color = '#00ff00';
        else if (colorRand < STAR_GREEN_PROB + STAR_RED_PROB) color = '#ff3333';
        skyCtx.beginPath();
        skyCtx.arc(x, y, r, 0, Math.PI * 2);
        skyCtx.fillStyle = color;
        skyCtx.globalAlpha = Math.random() * 0.5 + 0.5;
        skyCtx.fill();
      }
      skyCtx.globalAlpha = 1;
    }
    const skyTexture = new THREE.CanvasTexture(skyCanvas);
    skyTexture.wrapS = THREE.RepeatWrapping;
    skyTexture.wrapT = THREE.RepeatWrapping;
    const skyMaterial = new THREE.MeshBasicMaterial({
      map: skyTexture,
      side: THREE.BackSide
    });
    const skySphere = new THREE.Mesh(skyGeometry, skyMaterial);
    skySphere.position.set(0, 0, 0);
    return skySphere;
  };

  return {
    createSky
  };
}; 
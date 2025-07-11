<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useScene } from './useScene';
import Loader from './Loader.vue';
import Button from 'primevue/button';
import SceneHints from './SceneHints.vue';
import Slider from 'primevue/slider';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const isLoading = ref(true);
const sceneInstance = ref<ReturnType<typeof useScene> | null>(null);

// Слайдеры для двери
const doorWidth = ref(1.5);
const doorHeight = ref(3);

function updateDoorSize() {
  if (sceneInstance.value && sceneInstance.value.setDoorSize) {
    sceneInstance.value.setDoorSize({ width: doorWidth.value, height: doorHeight.value });
  }
}

onMounted(async () => {
  if (canvasRef.value) {
    try {
      sceneInstance.value = useScene();
      sceneInstance.value.mount(canvasRef.value);
      isLoading.value = false;
    } catch (error) {
      console.error('Failed to mount scene:', error);
      isLoading.value = false;
    }
  }

  // Обработчик стрелок
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!sceneInstance.value) return;
    if (e.key === 'ArrowLeft') sceneInstance.value.moveCube('left');
    if (e.key === 'ArrowRight') sceneInstance.value.moveCube('right');
    if (e.key === 'ArrowUp') sceneInstance.value.moveCube('forward');
    if (e.key === 'ArrowDown') sceneInstance.value.moveCube('back');
  };
  window.addEventListener('keydown', handleKeyDown);

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });
});

const toggleAmbientLight = () => {
  sceneInstance.value?.toggleAmbientLight();
};

const toggleEyeLight = () => {
  sceneInstance.value?.toggleEyeLight();
};

const teleportCube = () => {
  sceneInstance.value?.teleportCube();
};
</script>

<template>
  <div class="scene-layout">
    <div class="scene-wrapper">
      <canvas ref="canvasRef" style="width: 100%; height: 100%; display: block;"></canvas>
      <Loader v-if="isLoading" class="loader-overlay" />
      <!-- Кнопки управления освещением -->
      <div class="light-controls">
        <Button 
          @click="toggleAmbientLight" 
          icon="pi pi-sun" 
          label="Общий свет"
          severity="secondary"
          class="light-btn"
        />
        <Button 
          @click="toggleEyeLight" 
          icon="pi pi-eye" 
          label="Свет глаза"
          severity="secondary"
          class="light-btn"
        />
        <Button 
          @click="teleportCube" 
          icon="pi pi-refresh" 
          label="Телепорт куба"
          severity="secondary"
          class="light-btn"
        />
      </div>
    </div>
    <div class="scene-sidebar">
      <div class="door-sliders">
        <div>Ширина двери: {{ doorWidth }}</div>
        <Slider v-model="doorWidth" :min="0.5" :max="3" :step="0.01" @change="updateDoorSize" style="width: 220px;" />
        <div>Высота двери: {{ doorHeight }}</div>
        <Slider v-model="doorHeight" :min="1.5" :max="5" :step="0.01" @change="updateDoorSize" style="width: 220px;" />
      </div>
      <SceneHints />
    </div>
  </div>
</template>

<style scoped>
.scene-layout {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.scene-wrapper {
  flex: 1 1 0;
  position: relative;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.scene-wrapper canvas {
  flex: 1 1 0;
  width: 100% !important;
  height: 100% !important;
  display: block;
}
.scene-sidebar {
  width: 320px;
  min-width: 220px;
  max-width: 340px;
  padding: 24px 0 24px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;
  overflow-y: auto;
}
.door-sliders {
  background: #232323;
  color: #fff;
  border-radius: 10px;
  padding: 16px 18px;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}
.loader-overlay {
  position: absolute;
  inset: 0;
  background: rgba(90,90,90,0.8);
}

.light-controls {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.light-btn {
  min-width: 140px;
}
</style>
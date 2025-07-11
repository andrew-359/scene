<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useScene } from './useScene';
import Loader from './Loader.vue';
import Button from 'primevue/button';
import SceneHints from './SceneHints.vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const isLoading = ref(true);
const sceneInstance = ref<ReturnType<typeof useScene> | null>(null);

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
  <SceneHints />
</template>

<style scoped>
.scene-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
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
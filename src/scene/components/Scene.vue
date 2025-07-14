<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useScene } from '../hooks/_useScene';
import Loader from './Loader.vue';
import Button from 'primevue/button';
import SceneHints from './SceneHints.vue';
import DoorSizeControl from './DoorSizeControl.vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const isLoading = ref(true);
const sceneInstance = ref<ReturnType<typeof useScene> | null>(null);

const handleKeyDown = (e: KeyboardEvent) => {
    if (!sceneInstance.value) return;
    if (e.key === 'ArrowLeft') sceneInstance.value.moveCube('left');
    if (e.key === 'ArrowRight') sceneInstance.value.moveCube('right');
    if (e.key === 'ArrowUp') sceneInstance.value.moveCube('forward');
    if (e.key === 'ArrowDown') sceneInstance.value.moveCube('back');
  };

const isMobile = ref(false);

if (typeof window !== 'undefined') {
  isMobile.value = window.matchMedia('(max-width: 700px)').matches;
}

function onDoorSizeUpdate({ width, height }: { width: number; height: number }) {
  if (sceneInstance.value && sceneInstance.value.setDoorSize) {
    sceneInstance.value.setDoorSize({ width, height });
  }
}

const mount = () => {
  if (canvasRef.value) {
    try {
      sceneInstance.value = useScene();
      sceneInstance.value.mount(canvasRef.value);
    } catch (error) {
      console.error('Failed to mount scene:', error);
    } finally {
      isLoading.value = false;
    }
  }
}

onMounted(async () => {
  mount()
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown);
    sceneInstance.value?.destroy();
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
      <div class="light-controls flex gap-2 md:gap-3 mt-4 md:mt-6 justify-center w-full">
        <Button 
          @click="toggleAmbientLight" 
          icon="pi pi-sun" 
          label="Общий свет"
          severity="secondary"
          size="small"
          class="min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center"
        />
        <Button 
          @click="toggleEyeLight" 
          icon="pi pi-eye" 
          label="Свет глаза"
          severity="secondary"
          size="small"
          class="min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center"
        />
        <Button 
          @click="teleportCube" 
          icon="pi pi-refresh" 
          label="Телепорт куба"
          severity="secondary"
          size="small"
          class="min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center"
        />
      </div>
      <!-- Мобильные слайдеры -->
      <div class="door-sliders mobile-only">
        <DoorSizeControl @update:doorSize="onDoorSizeUpdate" />
      </div>
    </div>
    <div class="scene-sidebar desktop-only">
      <div class="door-sliders">
        <DoorSizeControl  @update:doorSize="onDoorSizeUpdate" />
      </div>
      <SceneHints v-if="!isMobile" />
    </div>
  </div>
</template>

<style src="../styles/scene.scss" lang="scss"></style>
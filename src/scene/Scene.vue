<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useScene } from './useScene';
import Loader from './Loader.vue';
import Button from 'primevue/button';
import SceneHints from './SceneHints.vue';
import Slider from 'primevue/slider';
import styles from './Scene.module.scss';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const isLoading = ref(true);
const sceneInstance = ref<ReturnType<typeof useScene> | null>(null);

// Слайдеры для двери
const doorWidth = ref(1.5);
const doorHeight = ref(3);

const isMobile = ref(false);
if (typeof window !== 'undefined') {
  isMobile.value = window.matchMedia('(max-width: 700px)').matches;
}

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
  <div :class="styles['scene-layout']">
    <div :class="styles['scene-wrapper']">
      <canvas ref="canvasRef" style="width: 100%; height: 100%; display: block;"></canvas>
      <Loader v-if="isLoading" :class="styles['loader-overlay']" />
      <!-- Кнопки управления освещением -->
      <div :class="[styles['light-controls'], 'flex gap-2 md:gap-3 mt-4 md:mt-6 justify-center w-full']">
        <Button 
          @click="toggleAmbientLight" 
          icon="pi pi-sun" 
          label="Общий свет"
          severity="secondary"
          size="small"
          :class="'min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center'"
        />
        <Button 
          @click="toggleEyeLight" 
          icon="pi pi-eye" 
          label="Свет глаза"
          severity="secondary"
          size="small"
          :class="'min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center'"
        />
        <Button 
          @click="teleportCube" 
          icon="pi pi-refresh" 
          label="Телепорт куба"
          severity="secondary"
          size="small"
          :class="'min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center'"
        />
      </div>
      <!-- Мобильные слайдеры -->
      <div :class="[styles['door-sliders'], styles['mobile-only']]">
        <div>Ширина двери: {{ doorWidth }}</div>
        <Slider v-model="doorWidth" :min="0.5" :max="3" :step="0.01" @change="updateDoorSize" style="width: 100%;" />
        <div>Высота двери: {{ doorHeight }}</div>
        <Slider v-model="doorHeight" :min="1.5" :max="5" :step="0.01" @change="updateDoorSize" style="width: 100%;" />
      </div>
    </div>
    <div :class="[styles['scene-sidebar'], styles['desktop-only']]">
      <div :class="styles['door-sliders']">
        <div>Ширина двери: {{ doorWidth }}</div>
        <Slider v-model="doorWidth" :min="0.5" :max="3" :step="0.01" @change="updateDoorSize" style="width: 220px;" />
        <div>Высота двери: {{ doorHeight }}</div>
        <Slider v-model="doorHeight" :min="1.5" :max="5" :step="0.01" @change="updateDoorSize" style="width: 220px;" />
      </div>
      <SceneHints v-if="!isMobile" />
    </div>
  </div>
</template>
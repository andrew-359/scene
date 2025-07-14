<script setup lang="ts">
import { ref, watch } from 'vue';
import Slider from 'primevue/slider';

const props = defineProps<{
 
}>();
const emit = defineEmits<{
  (e: 'update:doorSize', value: { width: number; height: number }): void;
}>();


const doorWidth = ref(props.width);
const doorHeight = ref(props.height);

watch([doorWidth, doorHeight], ([w, h]) => {
  emit('update:doorSize', { width: w, height: h });
});
</script>

<template>
  <div>
    <div>Ширина двери: {{ doorWidth }}</div>
    <Slider v-model="doorWidth" :min="0.5" :max="3" :step="0.01" style="width: 100%;" />
    <div>Высота двери: {{ doorHeight }}</div>
    <Slider v-model="doorHeight" :min="1.5" :max="5" :step="0.01" style="width: 100%;" />
  </div>
</template> 
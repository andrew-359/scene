<script setup lang="ts" generic="T">
const { title = `/forgoten_config =(/` } = defineProps<{
  title: string
}>()
</script>

<template>
  <div class=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <header class="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50">
      <div class="container mx-auto px-6 py-4">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-white mb-2">
            {{ title }}
          </h1>
        </div>
      </div>
    </header>

    <main class="scene-wrapper">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.scene-wrapper {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  top: 0
}
</style> 
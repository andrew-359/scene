<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { SYSTEM } from './_configs/system'
import Layout from '@/layout/Layout.vue'
import Scene from '@/scene/components/Scene.vue'

onBeforeMount(() => {
  document.title = SYSTEM.appTitle
})
</script>

<template>
  <Layout :title="SYSTEM.appTitle">
    <Scene />
  </Layout>
</template>
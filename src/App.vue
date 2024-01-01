<template>
  <div class="flex flex-col min-h-screen">
    <SiteNavigation />
    <div class="bg-white text-slate-900 w-100 mx-auto center max-w-xl">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';
</script>

<style lang="scss">
</style>

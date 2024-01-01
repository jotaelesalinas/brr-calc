<template>
    <div class="">
        <p v-if="title" class="px-2 py-0 uppercase text-xs font-Header font-medium text-slate-500">{{ title }}</p>
        <div class="px-2 py-3 border-y bg-slate-100">
          <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
});
</script>

<style scoped>
</style>
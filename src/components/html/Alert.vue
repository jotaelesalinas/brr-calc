<template>
  <div :class="`bg-${colors[level]}-100 text-${colors[level]}-800 p-4 rounded-md shadow-sm flex`">
    <div class="">
      <i :class="`fa-solid ${faIcons[level]} fa-xl`"></i>
    </div>
    <div class="ml-3 text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  level: {
    type: String,
    default: "info",
    validator(value) {
      return ['info', 'success', 'warning', 'danger'].includes(value)
    }
  },
});

const colors = ref({
  "info": "sky",
  "success": "emerald",
  "warning": "yellow",
  "danger": "red",
});

const faIcons = ref({
  "info": "fa-circle-info",
  "success": "fa-circle-check",
  "warning": "fa-circle-exclamation",
  "danger": "fa-circle-xmark",
});
</script>

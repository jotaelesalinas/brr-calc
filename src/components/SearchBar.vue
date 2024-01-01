<template>
    <div class="pt-4 mt-4 relative">
    <input v-model="searchQuery" type="text" placeholder="🔍 Buscar..."
        class="py-2 px-2 w-full bg-transparent border-b focus:border-calc-secondary focus:outline-none focus:shadow-md" />
    </div>
</template>

<script setup>
import { ref } from "vue";
const searchQuery = ref("");
</script>

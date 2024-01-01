<template>
  <main class="">
    <SearchBar />
    <FloatingButton />
  </main>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue';
import FloatingButton from '../components/FloatingButton.vue';

const floatingClicked = () => {
    alert(123); 
};
</script>

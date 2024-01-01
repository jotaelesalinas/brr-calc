<template>
    <header class="top-0 bg-calc-primary text-stone-50 shadow-lg">
        <nav class="container flex flex-col items-center gap-4 text-white py-6">
            <RouterLink :to="{name: 'home'}">
                <div class="gap-3 font-Header text-center text-xl">
                    <p class="item-row font-medium">Calculadora CRA</p>
                    <p class="item-row text-sm font-light">Comprar → Reformar → Alquilar</p>
                </div>
            </RouterLink>

            <div v-if="0" class="flex gap-3 flex-1 justify-end">
                <i class="fa-solid fa-circle-info text-xl hover:text-calc-secondary duration-150 cursor-pointer" @click="toggleModal"></i>
                <i class="fa-solid fa-plus text-xl hover:text-calc-secondary duration-150 cursor-pointer"></i>
            </div>

            <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
                <h1 class="font-Header font-bold">Hello from modal!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a lacinia est.</p>
                <p>Vivamus sollicitudin nunc ac ipsum dapibus, in faucibus urna hendrerit. Integer vitae fermentum nibh, vitae laoreet nisl.</p>
            </BaseModal>
        </nav>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import BaseModal from "./BaseModal.vue";

const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value; 
};
</script>

<style lang="scss" scoped>
</style>

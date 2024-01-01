<template>
  <main class="">
    <form @submit.prevent="checkSubmit">
      <header class="mx-2 py-6">
        <h1 class="text-xl font-Header font-bold">
          <button @click="$router.back()"><i class="fa-solid fa-arrow-left mr-1 hover:text-sky-700"></i></button>
          Nueva propiedad
        </h1>
      </header>
  
      <section class="">
        <PropertyForm />
      </section>
  
      <footer class="mt-8 border-t border-gray-900/10 pt-2">
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm rounded-md font-light hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200" @click="$router.back()">Cancelar</button>
          <button type="submit" class="rounded-md bg-sky-500 px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200">
            Continuar
            <i class="fa-solid fa-arrow-right-long ml-1"></i>
          </button>
        </div>
      </footer>
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import PropertyForm from "../components/PropertyForm.vue";

const trim = (ev) => {
  ev.target.value = ev.target.value.trim();
}

const input_city = ref(null),
      input_address = ref(null),
      input_alias = ref(null);

const city = ref(""),
      address = ref(""),
      alias = ref("");

const checkSubmit = (ev) => {
  console.log(typeof input_city);
  console.log(typeof input_city.value);
  console.log(typeof input_city.value.value);
  console.log(input_city.value.value);

  if (city.value === "") {
    this.$refs.input_city.value.focus();
    return;
  } else if (address.value === "") {
    this.$refs.input_address.value.focus();
    return;
  } else if (alias.value === "") {
    this.$refs.input_alias.value.focus();
    return;
  }

  console.log("city", city.value);
  console.log("address", address.value);
  console.log("alias", alias.value);
};
</script>

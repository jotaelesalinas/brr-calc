<template>
  <div>
    <div class="sm:col-span-2 sm:col-start-1 mt-6">
      <label for="{{ name }}" class="block text-xs text-slate-500">{{ label }}</label>
      <div class="mt-1">
        <input type="text" :name="name" :id="name" ref="html_input" :autocomplete="autocomplete" :placeholder="placeholder" class="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-200 sm:text-sm" :required="required" @blur="trim" v-model="inputText" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  name:         { type: String, default: "" },
  label:        { type: String, default: "" },
  prefix:       { type: String, default: "" },
  placeholder:  { type: String, default: "" },
  autocomplete: { type: String, default: "" },
  required:     { type: Boolean, default: false },
});

console.log("InputText props:");
console.log(props);

const trim = (ev) => {
  ev.target.value = ev.target.value.trim();
}

const html_input = ref(null);

const inputText = ref("");
</script>

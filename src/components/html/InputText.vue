<template>
  <div>
    <div class="">
      <label for="{{ name }}" class="block text-xs text-slate-500">{{ label }}</label>
      <div class="mt-1">
        <input type="text" :value="modelValue" @blur="trim_and_emit" :name="inputName" :id="inputName" ref="html_input" :autocomplete="autocomplete" :placeholder="placeholder" class="block w-full border-0 p-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-200 sm:text-sm" :disabled="disabled" :required="required" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue:   { type: String, default: "" },
  inputName:    { type: String, default: "" },
  label:        { type: String, default: "" },
  placeholder:  { type: String, default: "" },
  autocomplete: { type: String, default: "" },
  required:     { type: Boolean, default: false },
  disabled:     { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue', 'blur']);

const trim_and_emit = (ev) => {
  ev.target.value = ev.target.value.trim();
  emit('update:modelValue', ev.target.value, props.inputName);
  emit('blur', props.inputName, ev.target.value)
}
</script>

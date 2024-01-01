<template>
  <div>
    <div class="">
      <label for="{{ name }}" class="block text-xs text-slate-500">{{ label }}</label>
      <div class="mt-0">
        <input type="text" ref="input" :value="localAmount" @blur="onBlur" :name="inputName" :id="inputName" :autocomplete="autocomplete" :placeholder="placeholder" class="text-right block w-full border-0 p-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-200 sm:text-sm" :disabled="disabled" :required="required" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';

const input = ref();

const props = defineProps({
  modelValue:   { type: Number, default: "" },
  inputName:    { type: String, default: "" },
  label:        { type: String, default: "" },
  placeholder:  { type: String, default: "" },
  autocomplete: { type: String, default: "" },
  required:     { type: Boolean, default: false },
  disabled:     { type: Boolean, default: false },
  european:     { type: Boolean, default: false },
  mindigits:    { type: Number, default: 2 },
  maxdigits:    { type: Number, default: 2 },
});

const localAmount = computed({
  get: () => {
    let localNumberStr = localizeNumber(props.modelValue, props.european);
    return localNumberStr;
  }
});

const emit = defineEmits(['update:modelValue', 'update:asfloat', 'blur']);

const numberFromLocalStr = (txt, european) => {
  if (txt === "") {
    return "";
  }

  let containsZeroOrOneDots   = (str) => /^([^.]|\.(?=[^.]*$))*$/.test(str);
  let containsZeroOrOneCommas = (str) => /^([^,]|\,(?=[^,]*$))*$/.test(str);

  if (european) {
    if (!containsZeroOrOneCommas(txt)) {
      return "";
    }
    txt = txt.replace(/\./g, '');
    txt = txt.replace(/\,/g, '.');
  } else {
    if (!containsZeroOrOneDots(txt)) {
      return "";
    }
    txt = txt.replace(/\,/g, '');
  }

  return txt / 1;
};

const localizeNumber = (num, european) => {
  if (num === "") {
    return "";
  }

  let localized = num.toLocaleString(european ? "de-DE" : "en-US",
      { minimumFractionDigits: props.mindigits, maximumFractionDigits: props.maxdigits });

  return localized;
};

const onBlur = (ev) => {
  trimAndEmit(ev.target.value, ev);
}

const trimAndEmit = async (txt) => {
  let num = numberFromLocalStr(txt.trim(), props.european);

  if (num !== "") {
    num = num.toFixed(2);
  }

  if (props.modelValue === (num / 1)) {
    emit('update:modelValue', 0);
    await nextTick();
  }

  emit('update:modelValue', num / 1);
  emit('blur', props.inputName, num);
}

</script>

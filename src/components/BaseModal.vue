<template>
    <Teleport to="body">
        <Transition name="modal-outer">
            <div v-show="modalActive" class="absolute w-full bg-black bg-opacity-40 h-screen top-0 flex justify-center">
                <Transition name="modal-inner">
                    <div v-if="modalActive" class="m-8 p-8 bg-white text-black self-start mt-32 max-w-screen-md">
                        <slot />
                        <button class="text-white mt-8 bg-calc-primary py-2 px-6" @click="$emit('close-modal')">Close</button>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
  </template>
  
  <script setup>
  defineEmits(["close-modal"]);
  defineProps({
    modalActive: {
        type: Boolean,
        default: false,
    },
  });
</script>
  
<style scoped>
.modal-outer-enter-active,
.modal-inner-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-inner-leave-to {
    opacity: 0;
}

.modal-outer-enter-active {
    transition: all opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from {
    opacity: 0;
    transform: scale(0.8);
}
.modal-inner-leave-to {
    transform: scale(0.8);
}
</style>

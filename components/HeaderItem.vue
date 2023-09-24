<script lang="ts" setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div
    class="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white"
  >
    <div class="h-8 w-8 mb-1 group-hover:animate-bounce">
      <slot> </slot>
    </div>

    <p class="opacity-0 group-hover:opacity-100 uppercase tracking-widest">
      {{ title }}
    </p>
  </div>
</template>

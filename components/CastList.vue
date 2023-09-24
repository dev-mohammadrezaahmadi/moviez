<script lang="ts" setup>
defineProps<{
  cast: any[];
}>();
</script>

<template>
  <div class="w-full p-10 relative">
    <h2 class="font-bold text-3xl uppercase py-5">cast</h2>
    <div class="flex  overflow-x-scroll w-full space-x-4 scrollbar-hide">
      <div v-for="actor in cast">
        <CastThumbnail
          class="border border-green-500 rounded-md"
          :actor="actor"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

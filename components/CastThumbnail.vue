<script lang="ts" setup>
defineProps<{
  actor: {
    profile_path: string;
    name: string;
    character: string;
  };
}>();

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w500";
</script>

<template>
  <div
    :style="{ background: 'rgba(0, 0, 0, 0.5)' }"
    class="rounded-md w-[200px] h-[300px] p-5"
  >
    <img
      :src="
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : ``
      "
      alt="actorthumbnail"
      class="rounded-full w-[150px] h-[150px] object-cover"
    />
    <div class="mt-5 text-center">
      <span class="itext-lg block">{{ actor.name }}</span>
      <i>as</i> <span class="font-bold">{{ actor.character }}</span>
    </div>
  </div>
</template>

<style scoped></style>

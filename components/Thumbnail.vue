<script lang="ts" setup>
import { HandThumbUpIcon } from "@heroicons/vue/24/outline";
defineProps<{
  result: any;
}>();

const BASE_URL = "https://image.tmdb.org/t/p/original";
</script>

<template>
  <NuxtLink :href="`/movie/${result.id}`">
    <div
      class="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <NuxtImg
        :height="360"
        :width="640"
        alt="movie poster thumbnail"
        :placeholder="[640, 360]"
        :src="`${BASE_URL}${result.backdrop_path || result.poster_path}`"
      />
      <div class="p-2">
        <p class="truncate max-w-md">{{ result.overview }}</p>
        <h2
          class="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold"
        >
          {{ result.title || result.original_name }}
        </h2>
        <p class="flex items-center opacity-0 group-hover:opacity-100">
          <span v-if="result.media_type">{{ result.media_type }}</span>
          <span>&nbsp;</span>
          <span>{{ result.release_date || result.first_air_date }}</span>
          <span>&nbsp;</span>
          <HandThumbUpIcon class="h-5 mx-2" />
          <span>{{ result.vote_count }}</span>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>

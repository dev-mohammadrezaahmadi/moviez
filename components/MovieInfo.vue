<script lang="ts" setup>
import {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "~/constants/constants";

defineProps<{
  movie: {
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
  };
  directors: any | any[];
}>();
</script>

<template>
  <div
    :style="{
      background: movie.backdrop_path
        ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
        : '#000',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      padding: '20px 40px',
    }"
  >
    <div
      :style="{ background: `rgba(0, 0, 0, 0.7)` }"
      class="flex flex-col md:flex-row my-0 mx-auto relative max-w-7xl min-h-[450px] rounded-sm"
    >
      <div class="flex">
        <img
          :src="
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : ``
          "
          alt=""
          class=""
        />
      </div>
      <div class="p-10 text-white overflow-hidden">
        <h1 class="text-2xl font-extrabold md:text-5xl">{{ movie.title }}</h1>
        <h3 class="text-base mt-8 font-bold">PLOT:</h3>
        <p class="text-md md:text-justify">{{ movie.overview }}</p>
        <h3 class="text-base mt-8 font-bold">IMDB Rating</h3>
        <div class="flex items-center width-[190px] height-[20px]">
          <meter
            min="0"
            max="100"
            optimum="100"
            low="40"
            high="70"
            :value="movie.vote_average * 10"
          />
          <p class="ml-10">{{ movie.vote_average }}</p>
        </div>
        <h3 class="text-base mt-8 font-bold">
          <span v-if="directors.length > 1"> DIRECTORS </span>
          <span v-else> DIRECTOR </span>
        </h3>

        <p v-for="director in directors" class="m-0">
          {{ director.name }}
        </p>
      </div>
    </div>
  </div>
</template>
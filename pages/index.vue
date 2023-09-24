<script lang="ts" setup>
import categories from "~/routes/categories";

const url = `https://api.themoviedb.org/3${categories["trending"].url}`
const { data, status } = await useFetch<any>(url);
</script>

<template>
  <div>
    <MovieList v-if="data" :results="data.results" />
  </div>
</template>


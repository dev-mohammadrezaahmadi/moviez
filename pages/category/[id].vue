<script lang="ts" setup>
import categories from "~/routes/categories";
const route = useRoute();

const url = computed(() => {
  return `https://api.themoviedb.org/3${
    categories[route.params.id as string]?.url || categories["trending"].url
  }`;
});
const { data, status } = await useFetch<any>(url);
</script>

<template>
  <div>
    <MovieList v-if="data" :results="data.results" />
  </div>
</template>

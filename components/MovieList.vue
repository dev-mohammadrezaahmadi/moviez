<script lang="ts" setup>
defineProps<{
  results: any[]
}>()
// import categories from "~/routes/categories";
// const {query} = useRoute();

// const url = `https://api.themoviedb.org/3${
//   categories[route.query.genre as string]?.url || categories["trending"].url
// }`;

// const {} = useAsyncData(({query}) => {
//   const genre = query.genre


// })

</script>

<template>
  <div
    className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
  >
    <Thumbnail v-for="item in results" :key="item.id" :result="item" />
  </div>
</template>

<style scoped></style>

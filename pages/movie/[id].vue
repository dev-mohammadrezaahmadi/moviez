<script setup lang="ts">
const route = useRoute();


const API_KEY = "3bc42bf45aeeacb02b1b8e960d246cc9"

const {data: movieInfo} = await useFetch<any>(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${API_KEY}&language=en-US`)
const {data: movieCreditInfo} = await useFetch<any>(`https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=${API_KEY}`)
</script>

<template>
  <div>
    <div v-if="movieInfo">
      <MovieInfo
        :movie="movieInfo"
        :directors="
          movieCreditInfo.crew.filter((member: any) => member.job === 'Director')
        "
      />
      <MovieInfoBar
        :time="movieInfo.runtime"
        :budget="movieInfo.budget"
        :revenue="movieInfo.revenue"
      />
    </div>
    <div class="flex">
      <CastList :cast="movieCreditInfo.cast" />
    </div>
  </div>
</template>

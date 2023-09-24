<script lang="ts" setup>
import categories from "~/routes/categories";
</script>

<template>
  <nav class="relative">
    <div
      class="flex py-5 px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
    >
      <NuxtLink
        v-for="category in categories"
        :to="`/?genre=${category.title.toLocaleLowerCase()}`"
      >
        <h2
          class="last:pr-24 capitalize cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500"
        >
          {{ category.title }}
        </h2>
      </NuxtLink>
    </div>
    <div
      class="absolute top-5 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"
    />
  </nav>
</template>

<style scoped></style>

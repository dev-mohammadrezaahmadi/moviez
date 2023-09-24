<script setup lang="ts">
useHead({
  title: 'Moviez'
})
</script>

<template>
  <div>
    <NuxtLayout>
      <Nav></Nav>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
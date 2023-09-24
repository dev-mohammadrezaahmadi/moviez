<script lang="ts" setup>
import {
  UserIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  RectangleStackIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <header
    class="flex flex-col sm:flex-row m-5 justify-between items-center h-auto"
  >
    <div class="flex flex-grow justify-evenly max-w-2xl">
      <NuxtLink href="/">
        <HeaderItem title="home">
          <HomeIcon />
        </HeaderItem>
      </NuxtLink>

      <HeaderItem title="trending">
        <BoltIcon />
      </HeaderItem>
      <HeaderItem title="verified">
        <CheckBadgeIcon />
      </HeaderItem>
      <HeaderItem title="collections">
        <RectangleStackIcon />
      </HeaderItem>
      <HeaderItem title="search">
        <MagnifyingGlassIcon />
      </HeaderItem>
      <HeaderItem title="account">
        <UserIcon />
      </HeaderItem>
    </div>
    <NuxtLink href="/">
      <NuxtImg
        src="/hulu-white.png"
        width="200"
        height="100"
        alt="website main logo"
        class="cursor-pointer object-contain"
      />
    </NuxtLink>
  </header>
</template>

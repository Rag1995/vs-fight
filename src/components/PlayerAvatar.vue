<script setup lang="ts">
defineProps<{
  avatar: string,
  name: string,
}>()
</script>

<template>
  <div class="relative">
    <img
      :src="avatar"
      draggable="false"
      class="h-full w-full"
    >
    <div class="absolute inset-x-0 bottom-0 line-clamp-1 bg-black/50 text-center text-3xl font-black">
      {{ name }}
    </div>
  </div>
</template>
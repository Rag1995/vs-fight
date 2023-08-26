<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition ease-out duration-300"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-to-class="opacity-0"
    >
      <div
        v-show="show"
        class="fixed inset-0 z-40 overflow-hidden bg-black/75"
      >
        <slot />
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import Explosion from '@img/explosion.png'
import DropFile from './Base/Form/DropFile.vue'

const files = ref<File[]>([])
const file = computed(() => files.value?.[0])
const generateURL = (file: File) => {
  const fileSrc = URL.createObjectURL(file)
  setTimeout(() => {
    URL.revokeObjectURL(fileSrc)
  }, 1000)
  return fileSrc
}

const name = computed(() => file.value?.name.replace(/\..*$/, ''))
const avatar = computed(() => file.value ? generateURL(file.value) : '')

type State = 'idle' | 'onHit' | 'knockOut'
const state = ref<State>('idle')
const onClick = () => {
  if (state.value !== 'idle') return
  state.value = 'onHit'
}
const onAnimEnd = () => {
  if (state.value === 'onHit') {state.value = 'knockOut'}
  else if (state.value === 'knockOut') {
    files.value = []
    state.value = 'idle'
  }
}

</script>

<template>
  <div class="relative aspect-square w-[200px]">
    <DropFile
      v-if="files.length === 0"
      v-model="files"
      class="h-full w-full"
    />

    <div
      v-else
      @click="onClick()"
    >
      <PlayerAvatar
        :avatar="avatar"
        :name="name"
        class="animate__animated h-full w-full"
        :class="{
          'animate__shakeX animate__faster': state === 'onHit',
          'animate__rotateOutDownLeft grayscale': state === 'knockOut',
        }"
        @animationend="onAnimEnd()"
      />
      <BaseSprite
        v-if="state === 'onHit'"
        :src="Explosion"
        width="500px"
        height="500px"
        :frames="6"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
      />
    </div>
  </div>
</template>
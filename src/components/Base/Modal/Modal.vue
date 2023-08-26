<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const modal = ref<HTMLElement>()
const show = useVModel(props, 'modelValue', emit)

onClickOutside(modal, () => {
  show.value = false
})

const attrs = useAttrs()
</script>

<template>
  <BaseModalBackdrop :show="show">
    <div
      class="container mx-auto flex h-screen flex-col justify-center overflow-y-scroll py-6"
    >
      <Transition
        enter-from-class="opacity-0 translate-y-10 scale-95"
        enter-active-class="transition ease-out duration-300"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="transition ease-in duration-300"
        leave-to-class="opacity-0 translate-y-10 scale-95"
      >
        <div
          v-show="show"
          ref="modal"
          v-bind="attrs"
        >
          <slot />
        </div>
      </Transition>
    </div>
  </BaseModalBackdrop>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: File[]
  multiple?: boolean
  accept?: string
}>(), {
  accept: 'image/*',
})

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:modelValue', v: File[]): void
}

const uid = ref(`drop-file-${getCurrentInstance()?.uid}`)
const isDragging = ref(false)

const input = ref<HTMLInputElement>()
const files = useVModel(props, 'modelValue', emit)

const onChange = () => {
  const f = input.value?.files ?? []
  if (f.length === 0) return

  // 多檔案/單一檔案處理
  files.value = props.multiple ? Array.from(f) : [f[0]]
}

// const generateURL = (file: File) => {
//   const fileSrc = URL.createObjectURL(file)
//   setTimeout(() => {
//     URL.revokeObjectURL(fileSrc)
//   }, 1000)
//   return fileSrc
// }

const dragover = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = true
}
const dragleave = () => {
  isDragging.value = false
}
const drop = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = false

  const files = e.dataTransfer?.files ?? null
  if (!input.value || !files) return
  input.value.files = files
  onChange()
}

</script>

<template>
  <div
    class="flex items-center justify-center border-[2px] border-dashed border-gray-700"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <input
      :id="uid"
      ref="input"
      type="file"
      :accept="accept"
      class="absolute h-[1px] w-[1px] overflow-hidden opacity-0"
      @change="onChange"
    >

    <label
      :for="uid"
      class="cursor-pointer"
    >
      <div class="text-4xl text-white/20">Upload</div>
      <!-- <div v-if="isDragging">Release to drop files here.</div>
      <div v-else>Drop files here or <u>click here</u> to upload.</div> -->
    </label>
  </div>
</template>
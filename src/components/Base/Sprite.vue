<script setup lang="ts">
withDefaults(defineProps<{
  src: string // 圖片來源
  width: string // 圖片寬度
  height: string // 圖片高度
  frames?: number // 圖片幀數
  fps?: number // 圖片幀率
  loop?: boolean // 是否循環播放
}>(), {
  frames: 1,
  fps: 16,
})
</script>

<template>
  <div
    class="min-h-[var(--sprite-height)] min-w-[var(--sprite-width)] animate-[sprite_var(--anim-duration)_steps(var(--anim-step))_var(--anim-iteration-count)] select-none bg-[image:var(--sprite-src)]"
    :style="{
      '--sprite-src': `url('${src}')`,
      '--sprite-width': width,
      '--sprite-height': height,
      '--sprite-full-width': `calc(${width} * ${-frames})`,
      '--anim-step': frames,
      '--anim-duration': `${frames / fps}s`,
      '--anim-iteration-count': loop ? 'infinite' : 1,
    }"
  />
</template>

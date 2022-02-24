<template>
  <div class="xl:w-1/3 xl:pl-8 xl:pr-8 flex flex-col items-center">
    <circle-image :src="imgSrc"></circle-image>
    <h1
      class="text-green-500 font-medium lg:text-2xl xl:text-4xl lg:mt-8 xl:mt-10 text-center"
    >
      <slot name="title"></slot>
    </h1>
    <h2
      class="text-gray-600 lg:text-lg xl:text-2xl lg:mt-4 xl:mt-6 text-center"
    >
      <slot name="caption"></slot>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CircleImage from '@/components/landing/CircleImage.vue'

export default defineComponent({
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  },
  components: {
    CircleImage
  }
})
</script>

<template>
  <div
    class="flex flex-row items-center justify-center xl:h-14 xl:pl-4 xl:pr-4 xl:ml-4 xl:mr-4 rounded-l-full rounded-r-full shadow-md text-gray-800 cursor-pointer"
  >
    <div
      class="xl:h-12 xl:w-12 flex items-center justify-center bg-gray-50 border-2 border-gray-100 rounded-full shadow-sm"
    >
      <img class="xl:h-8 xl:w-8" :src="imgSrc" alt="" />
    </div>
    <div class="xl:text-2xl xl:ml-4">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    imgSrc: {
      required: true,
      type: String
    }
  }
})
</script>

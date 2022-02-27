<template>
  <div
    class="w-full xl:h-16 flex flex-row items-center xl:pb-2 xl:pt-2 cursor-pointer"
  >
    <img class="xl:w-8" :src="imgSrc" alt="" />
    <h2 class="xl:text-md xl:ml-4 font-extrabold">
      <slot></slot>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div
    class="lg:w-48 xl:w-80 lg:h-48 xl:h-80 flex items-center justify-center rounded-full border-8 border-gray-100 shadow-xl"
  >
    <img class="lg:w-36 xl:w-56 lg:h-36 xl:h-56" :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    }
  }
})
</script>

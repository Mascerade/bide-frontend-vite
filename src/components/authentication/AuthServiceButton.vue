<template>
  <button
    class="h-16 w-16 flex justify-center items-center rounded-full border-2 border-gray-100 shadow-sm"
  >
    <img class="h-8 w-8" :src="src" alt="Authentication Service" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup() {
    return
  }
})
</script>

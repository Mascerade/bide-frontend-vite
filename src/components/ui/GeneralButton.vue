<template>
  <button
    class="bg-green-400 hover:bg-green-300 text-white rounded-lg lg:text-2xl lg:pr-8 lg:pl-8 lg:pt-3 lg:pb-3"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return
  }
})
</script>

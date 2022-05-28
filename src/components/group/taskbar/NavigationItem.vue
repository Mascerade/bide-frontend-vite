<template>
  <button
    class="xl:pt-1 xl:pb-1 xl:pr-2 xl:pl-2 xl:mr-4 rounded-md hover:bg-green-300 active:bg-green-400"
  >
    <p class="xl:text-lg font-medium">
      <slot></slot>
    </p>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'typeface-oxygen'

export default defineComponent({
  setup() {}
})
</script>

<template>
  <div
    class="flex flex-col h-full xl:pl-5 xl:pr-5 justify-center text-center font-medium hover:text-white hover:bg-green-300 hover:cursor-pointer active:bg-green-400 first:rounded-l-md"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'typeface-oxygen'

export default defineComponent({
  setup() {}
})
</script>

<template>
  <div class="flex flex-row xl:p-4 xl:mb-2 rounded-lg bg-white">
    <span class="flex-grow text-green-500 font-medium">{{ title }} </span>
    <span class="text-gray-600 font-medium"> {{ content }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String
    },
    content: {
      required: true,
      content: String
    }
  }
})
</script>

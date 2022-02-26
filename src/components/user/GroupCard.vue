<template>
  <div class="xl:w-72 xl:p-3">
    <div class="xl:h-72 flex flex-col shadow-xl rounded-lg">
      <div class="w-full xl:h-4 bg-green-400 rounded-tr-lg rounded-tl-lg"></div>
      <div class="flex-grow">
        <h1
          class="xl:text-2xl xl:ml-1 xl:mr-1 xl:pt-1 xl:pb-1 break-words text-center border-b-2 border-gray-100"
        >
          {{ title }}
        </h1>
        <h2 class="xl:text-lg text-center break-words">{{ description }}</h2>
      </div>
      <button
        class="text-red-500 text-center border-t-2 border-gray-100 hover:bg-gray-100 xl:text-lg"
      >
        Leave Group
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
})
</script>

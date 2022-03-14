<template>
  <div class="xl:w-[500px] xl:p-3">
    <div class="flex flex-row h-full">
      <div
        class="xl:min-h-[180px] w-full flex flex-col shadow-xl rounded-r-lg bg-white border-l-8 border-green-500 rounded-l-lg"
      >
        <div class="flex flex-col flex-grow">
          <h1
            class="xl:text-xl xl:ml-1 xl:mr-1 xl:pt-1 xl:pb-1 font-semibold break-words text-center"
          >
            {{ name }}
          </h1>
          <hr class="mr-2 ml-2" />
          <div class="flex flex-grow items-center">
            <h2 class="xl:text-lg xl:ml-3 xl:mr-3 text-center break-words">
              {{ description }}
            </h2>
          </div>
        </div>
        <hr />
        <button class="text-red-500 text-center hover:bg-gray-100 xl:text-lg">
          Leave Group
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
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

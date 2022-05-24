<template>
  <div
    class="flex flex-row font-quicksand items-center lg:h-16 lg:pl-10 xl:pl-14 lg:pr-10 xl:pr-14"
  >
    <img :src="logo" alt="" class="xl:h-8 xl:w-8 xl:mr-2" />
    <h1
      class="text-gray-700 font-medium lg:text-3xl xl:text-4xl lg:pr-14 xl:pr-20"
    >
      Bide
    </h1>
    <div class="h-full flex flex-grow flex-row items-center">
      <input
        type="text"
        :placeholder="'Search Bide'"
        class="h-3/4 w-3/4 pl-4 text-xl bg-gray-100 rounded-xl focus:outline-none"
      />
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '@/assets/icons/logo.png'

export default defineComponent({
  setup() {
    return {
      logo
    }
  }
})
</script>

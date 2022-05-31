<template>
  <div
    class="xl:p-5 border-[1px] border-slate-100 rounded-lg shadow-md bg-white"
  >
    <h2 class="text-lg text-green-500 font-medium">{{ title }}</h2>
    <h3 class="text-gray-800">
      {{ description }} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </h3>
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
    description: {
      required: true,
      type: String
    }
  }
})
</script>

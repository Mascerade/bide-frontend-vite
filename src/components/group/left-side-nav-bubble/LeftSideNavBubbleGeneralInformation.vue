<template>
  <div
    class="xl:p-2 text-center border-[1px] border-slate-100 rounded-md shadow-md"
  >
    <h2 class="text-xl text-green-500 font-medium">{{ title }}</h2>
    <h3>
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

<template>
  <!-- Profile Image -->
  <div
    class="h-32 w-32 bg-white rounded-full border-2 border-slate-600 shadow-md"
  >
    <img class="h-full rounded-full" :src="defaultProfileImg" alt="" />
  </div>

  <!-- Name, Title, and Description -->
  <div
    class="xl:w-full xl:pl-2 xl:pr-2 xl:mt-4 flex flex-col flex-grow items-center"
  >
    <h1 class="text-4xl font-medium">
      {{ groupTitle }}
    </h1>
    <h3 class="xl:mt-2 text-sm font-medium">{{ groupName }}</h3>
    <h2 class="xl:mt-2 text-center text-slate-800 font-medium">
      {{ groupDescription }}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import defaultProfileImg from '@/assets/empty-groups.png'

export default defineComponent({
  props: {
    groupTitle: {
      required: true,
      type: String
    },
    groupName: {
      required: true,
      type: String
    },
    groupDescription: {
      required: true,
      type: String
    }
  },
  setup() {
    return {
      defaultProfileImg
    }
  }
})
</script>

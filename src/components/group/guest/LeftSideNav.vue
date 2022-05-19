<template>
  <!-- Left-Side Information About Users/General Group Information (Name/Title/Description) -->
  <div
    class="xl:w-96 xl:min-h-[calc(100vh-4rem)] flex flex-col bg-slate-100 shadow-md"
  >
    <!-- Group Profile Information -->
    <div class="xl:w-full xl:h-full xl:mt-4 flex flex-col items-center">
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
          {{ group.title }}
        </h1>
        <h3 class="xl:mt-2 text-sm font-medium">{{ group.name }}</h3>
        <h2 class="xl:mt-2 text-center text-slate-800 font-medium">
          {{ group.description }}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h2>
      </div>

      <div class="w-full xl:mb-2 xl:pl-3 xl:pr-3">
        <div
          class="xl:pl-3 xl:pr-3 xl:pt-2 xl:pb-2 flex flex-row justify-center items-center bg-white rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
        >
          <p class="xl:text-2xl text-green-600 font-medium">Join!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import defaultProfileImg from '@/assets/empty-groups.png'

export default defineComponent({
  setup() {
    const store = useStore()
    const group = computed(() => store.state.currentGroupViewing)
    return {
      group,
      defaultProfileImg
    }
  }
})
</script>

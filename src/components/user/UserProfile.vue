<template>
  <div class="xl:h-96 xl:w-64 flex flex-col rounded-xl shadow-lg">
    <div class="bg-green-400 xl:h-14 w-full rounded-t-xl"></div>
    <profile-image class="relative xl:bottom-12 self-center"></profile-image>
    <div class="relative xl:bottom-12 xl:ml-3 flex-grow">
      <h1 class="xl:text-2xl font-semibold text-green-500">@Mascerade</h1>
      <h2 class="xl:text-xl xl:mt-2">Jason</h2>
      <h2 class="xl:text-xl xl:mt-1">Acheampong</h2>
      <h2 class="xl:text-lg xl:mt-1">
        Trying to code this profile view and I've redone it 3 times. #lifegoals
      </h2>
    </div>
    <footer
      class="w-full flex flex-row justify-between border-t-2 border-gray-100"
    >
      <button
        class="w-1/2 xl:text-lg text-center border-r-2 border-gray-100 hover:bg-gray-100 text-red-500 rounded-bl-xl xl:pl-2"
      >
        Log Out
      </button>
      <button
        class="w-1/2 xl:text-lg text-center border-gray-100 hover:bg-gray-100 text-green-500 rounded-br-xl xl:pr-2"
      >
        Settings
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileImage from './ProfileImage.vue'

export default defineComponent({
  components: {
    ProfileImage
  }
})
</script>

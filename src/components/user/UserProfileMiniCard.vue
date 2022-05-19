<template>
  <div
    class="xl:w-[270px] flex flex-col justify-center items-center rounded-xl bg-white"
  >
    <div class="flex flex-row xl:mb-3 xl:mt-3 xl:ml-2 xl:mr-2">
      <div class="flex items-center justify-center rounded-full">
        <img
          class="xl:h-10 xl:w-10 rounded-full"
          src="../../assets/icons/default-profile-img-2.png"
          alt=""
        />
      </div>
      <div class="xl:ml-3">
        <h2 class="xl:text-md xl:mt-2 font-bold">
          {{ firstName }} {{ lastName }}
        </h2>
        <h2 class="xl:text-md xl:mt-2 text-center text-slate-900">
          @{{ username }}
        </h2>
      </div>
    </div>
    <!-- <footer
      class="w-full flex flex-row justify-between border-t-2 border-gray-100"
    >
      <button
        class="w-1/2 xl:text-md text-center border-r-2 border-gray-100 hover:bg-gray-100 text-red-500 rounded-bl-xl xl:pl-2 xl:pt-1 xl:pb1"
      >
        Log Out
      </button>
      <button
        class="w-1/2 xl:text-md text-center border-gray-100 hover:bg-gray-100 text-green-500 rounded-br-xl xl:pr-2 xl:pt-1 xl:pb1"
      >
        Settings
      </button>
    </footer> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileImage from './ProfileImage.vue'

export default defineComponent({
  props: {
    username: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  components: {
    ProfileImage
  }
})
</script>

<template>
  <div class="w-full h-full lg:flex-col">
    <div class="w-full flex">
      <div
        class="xl:h-screen xl:min-h-[500px] xl:w-56 flex flex-col rounded-tr-lg rounded-br-lg border-r-2 border-gray-50 shadow-xl"
      >
        <div class="w-full xl:h-14 rounded-tr-lg bg-green-400"></div>
        <profile-image
          class="relative xl:bottom-12 self-center"
        ></profile-image>
        <div class="relative xl:bottom-12 xl:pt-2 xl:pl-2">
          <p class="xl:text-lg">@Username</p>
          <p class="xl:text-md xl:mt-2">First Name</p>
          <p class="xl:text-md xl:mt-1">Last Name</p>
          <p class="xl:text-md xl:mt-1">Description</p>
        </div>
        <hr class="relative xl:bottom-12" />
        <div class="relative flex-grow xl:bottom-12"></div>
        <hr class="relative xl:bottom-12" />
        <div class="relative xl:bottom-12 rounded-br-lg">sasdf</div>
      </div>

      <div class="flex flex-grow xl:p-2">
        <div class="flex lg:flex-row flex-wrap">
          <group-card></group-card>
          <group-card></group-card>
          <group-card></group-card>
          <group-card></group-card>
          <group-card></group-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileImage from '@/components/user/ProfileImage.vue'
import GroupCard from '@/components/user/GroupCard.vue'

export default defineComponent({
  components: {
    ProfileImage,
    GroupCard
  }
})
</script>

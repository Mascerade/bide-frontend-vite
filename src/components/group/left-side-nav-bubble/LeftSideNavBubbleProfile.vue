<template>
  <!-- Group Profile Information -->
  <div
    class="flex flex-col items-center w-full xl:p-2 xl:mb-3 rounded-md green-gradient-4 shadow-md"
  >
    <img
      class="xl:h-32 xl:w-32 shadow-md rounded-full border-2 border-slate-50"
      :src="defaultProfileImg"
      alt=""
    />
    <h2 class="xl:text-3xl font-medium text-white">{{ groupTitle }}</h2>
    <h2 class="xl:text-lg font-bold text-white">@{{ groupName }}</h2>
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
    }
  },
  setup() {
    return {
      defaultProfileImg
    }
  }
})
</script>

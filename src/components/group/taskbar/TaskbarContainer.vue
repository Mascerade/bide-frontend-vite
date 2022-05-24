<template>
  <div class="flex flex-row items-center xl:h-14 xl:w-full xl:mt-2">
    <div class="flex flex-grow">
      <slot></slot>
    </div>

    <button
      class="xl:p-2 xl:mr-2 xl:ml-2 rounded-md hover:bg-green-100 active:bg-green-200"
    >
      <img class="xl:h-8 w-full" :src="searchIcon" alt="" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import searchIcon from '@/assets/icons/search-icon-group.svg'

export default defineComponent({
  setup() {
    return {
      searchIcon
    }
  }
})
</script>

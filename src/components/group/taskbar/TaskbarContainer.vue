<template>
  <div
    class="xl:w-full xl:h-12 flex flex-row items-center bg-white rounded-md shadow-md"
  >
    <div class="xl:h-full flex flex-grow">
      <slot></slot>
    </div>

    <button
      class="xl:p-2 xl:mr-2 xl:ml-2 rounded-md hover:bg-green-100 active:bg-green-200"
    >
      <img class="xl:h-8 w-full" :src="searchIcon" alt="" />
    </button>
    <button
      v-if="memberOfGroup"
      title="Post"
      class="xl:p-2 xl:mr-2 xl:ml-2 rounded-md hover:bg-green-100 active:bg-green-200"
    >
      <img class="xl:h-8 w-full" :src="postIcon" alt="Make a Post" />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import searchIcon from '@/assets/icons/search-icon-group.svg'
import postIcon from '@/assets/icons/make-post.png'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const memberOfGroup = computed(() => store.getters.memberOfGroup)
    return {
      searchIcon,
      postIcon,
      memberOfGroup
    }
  }
})
</script>

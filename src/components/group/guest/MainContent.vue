<template lang="">
  <div
    class="flex flex-col xl:w-full xl:h-[calc(100vh-4rem)] xl:pl-12 xl:-pr-12"
  >
    <!-- Middle Post/Content Region -->
    <div class="flex flex-col justify-center xl:w-[calc(100%-3rem)]">
      <!-- Taskbar -->
      <div class="flex flex-row items-center xl:h-14 xl:w-full xl:mt-2">
        <div class="flex flex-grow">
          <navigation-item class="bg-green-200">Posts</navigation-item>
        </div>

        <button
          class="xl:p-2 xl:mr-2 xl:ml-2 rounded-md hover:bg-green-100 active:bg-green-200"
        >
          <img class="xl:h-8 w-full" :src="searchIcon" alt="" />
        </button>
      </div>
      <div class="xl:w-full xl:pl-3 xl:pr-3 xl:mt-3">
        <post v-for="post in group.posts" :key="post.id" :post="post"></post>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import NavigationItem from '@/components/group/NavigationItem.vue'
import Post from '@/components/group/Post.vue'
import searchIcon from '@/assets/icons/search-icon-group.svg'

export default defineComponent({
  components: {
    NavigationItem,
    Post
  },
  setup() {
    const store = useStore()
    const group = computed(() => store.state.currentGroupViewing)

    return {
      group,
      searchIcon
    }
  }
})
</script>

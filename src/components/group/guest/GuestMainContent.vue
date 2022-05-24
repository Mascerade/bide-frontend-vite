<template lang="">
  <main-content-container>
    <!-- Taskbar -->
    <taskbar-container>
      <navigation-item class="bg-green-400 text-white">Posts</navigation-item>
    </taskbar-container>

    <!-- Posts Container -->
    <post-container>
      <post v-for="post in group.posts" :key="post.id" :post="post"></post>
    </post-container>
  </main-content-container>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import MainContentContainer from '@/components/group/main-content/MainContentContainer.vue'
import TaskbarContainer from '@/components/group/taskbar/TaskbarContainer.vue'
import NavigationItem from '@/components/group/taskbar/NavigationItem.vue'
import PostContainer from '@/components/post/GroupPostContainer.vue'
import Post from '@/components/post/GroupPost.vue'

export default defineComponent({
  components: {
    MainContentContainer,
    TaskbarContainer,
    NavigationItem,
    PostContainer,
    Post
  },
  setup() {
    const store = useStore()
    const group = computed(() => store.state.currentGroupViewing)

    return {
      group
    }
  }
})
</script>

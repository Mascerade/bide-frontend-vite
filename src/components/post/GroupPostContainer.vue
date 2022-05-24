<template>
  <div class="flex flex-row justify-center xl:w-full xl:mt-3">
    <slot v-if="postsExists"></slot>
    <div v-else class="text-center">
      <img :src="emptyGroupPostsImg" alt="" />
      <h2 class="xl:text-3xl text-slate-900">No posts are in this group!</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import emptyGroupPostsImg from '@/assets/group-empty-posts.png'

export default defineComponent({
  props: {
    postsExists: {
      required: true,
      type: Boolean
    }
  },
  setup() {
    const store = useStore()
    return {
      emptyGroupPostsImg
    }
  }
})
</script>

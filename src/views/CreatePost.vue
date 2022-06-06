<template>
  <navbar />
  <div
    class="flex flex-col justify-center items-center min-w-[100vw] min-h-[calc(100vh-3.5rem)] bg-light-background"
  >
    <div class="flex flex-col xl:w-5/12 xl:p-8 rounded-xl bg-white">
      <h1 class="xl:text-lg xl:mb-2 text-green-500">Create Post</h1>
      <input
        type="text"
        placeholder="Title"
        class="xl:h-9 xl:w-full xl:mb-8 text-md border-b-[1px] border-slate-400 italic focus:outline-none focus:border-slate-900"
      />
      <textarea
        type="text"
        placeholder="Post Content"
        rows="5"
        class="xl:w-full xl:mb-9 text-md border-b-[1px] border-slate-400 resize-none focus:outline-none focus:border-slate-900"
      />
      <div class="!w-3/5 self-center">
        <bubble-button>Post</bubble-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'
import Navbar from '@/components/ui/Navbar.vue'
import BubbleButton from '@/components/group/GroupBubbleButton.vue'

export default defineComponent({
  components: {
    Navbar,
    BubbleButton
  },
  setup() {
    const store = useStore()
  }
})
</script>

<template>
  <div class="xl:p-3 bg-white border-2 border-slate-100 rounded-md">
    <div>
      <!-- Header -->
      <h1 class="xl:text-2xl font-medium">{{ post.title }}</h1>
      <h2 class="font-medium">
        {{ post.author.firstName }} {{ post.author.lastName }} •
        {{ post.author.username }}
      </h2>
    </div>
    <h2 class="xl:text-lg">{{ post.content }}</h2>
    <hr class="xl:mt-4 xl:mb-4" />
    <div class="xl:w-full flex flex-row justify-end">
      <div
        class="xl:w-20 xl:mr-4 flex flex-col items-center hover:cursor-pointer"
      >
        <img :src="criticismImg" alt="" class="xl:h-10 xl:w-10" />
        <p class="font-medium">Criticize</p>
      </div>
      <div
        class="xl:w-10 xl:mr-3 flex flex-col items-center hover:cursor-pointer"
      >
        <img :src="praiseImg" alt="" class="xl:h-10 xl:w-10" />
        <p class="font-medium">Praise</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '@/types/database-models'
import { defineComponent, PropType } from 'vue'
import praiseImg from '@/assets/icons/praise.png'
import criticismImg from '@/assets/icons/criticism.png'

export default defineComponent({
  props: {
    post: {
      required: true,
      type: Object as PropType<Post>
    }
  },
  setup() {
    return {
      praiseImg,
      criticismImg
    }
  }
})
</script>

<template>
  <div class="xl:p-3 bg-white border-2 border-slate-100 rounded-md">
    <div>
      <!-- Header -->
      <h1 class="text-slate-700 xl:text-2xl font-semibold">{{ post.title }}</h1>
      <h2 class="text-slate-800 font-semibold">
        {{ post.author.firstName }} {{ post.author.lastName }}
        <span class="text-slate-900"> • </span>
        <span class="text-green-500 cursor-pointer">{{
          post.author.username
        }}</span>
      </h2>
      <h2 class="xl:text-sm text-slate-600 font-medium">
        {{
          new Date(post.postDate).toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }}
      </h2>
      <hr class="bg-slate-100 border-none h-[1px] xl:mt-3 xl:mb-3" />
    </div>
    <h2 class="xl:text-lg">{{ post.content }}</h2>
    <hr class="bg-slate-100 border-none h-[1px] xl:mt-4" />
    <div class="xl:w-full xl:pt-3 flex flex-row">
      <div
        class="flex flex-row xl:p-3 hover:bg-green-100 active:bg-green-200 items-center cursor-pointer rounded-md"
      >
        <img :src="discussionImg" alt="" class="xl:h-10 xl:w-10" />
        <p class="xl:text-xl xl:ml-2 font-medium select-none cursor-pointer">
          Discussion
        </p>
      </div>
      <div class="flex flex-row flex-grow justify-end">
        <div
          class="xl:w-20 xl:p-1 xl:mr-4 flex flex-col items-center hover:cursor-pointer hover:bg-green-100 active:bg-green-200 rounded-md"
        >
          <img :src="criticismImg" alt="" class="xl:h-8 xl:w-8" />
          <p class="font-medium select-none cursor-pointer">Criticize</p>
        </div>
        <div
          class="xl:w-20 xl:p-1 xl:mr-3 flex flex-col items-center hover:cursor-pointer hover:bg-green-100 active:bg-green-200 rounded-md"
        >
          <img :src="praiseImg" alt="" class="xl:h-8 xl:w-8" />
          <p class="font-medium select-none cursor-pointer">Praise</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '@/types/database-models'
import { defineComponent, PropType } from 'vue'
import praiseImg from '@/assets/icons/praise.png'
import criticismImg from '@/assets/icons/criticism.png'
import discussionImg from '@/assets/icons/discussion.png'

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
      criticismImg,
      discussionImg
    }
  }
})
</script>

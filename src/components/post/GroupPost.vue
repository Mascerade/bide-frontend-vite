<template>
  <div class="flex flex-col xl:mb-3 bg-white rounded-lg">
    <!-- Header -->
    <div
      class="flex flex-row items-center xl:p-4 xl:pl-7 xl:pr-7 border-b-[1px] border-gray-100 rounded-t-md"
    >
      <img
        class="xl:h-10 xl:w-10 mr-4 rounded-full shadow-md hover:cursor-pointer"
        src="/src/assets/icons/default-profile-img-2.png"
        alt=""
      />
      <div class="flex-grow">
        <div class="flex flex-row">
          <h1 class="flex-grow text-slate-900 xl:text-xl font-medium">
            {{ post.title }}
          </h1>
          <h2 class="xl:text-sm text-slate-600 font-semibold">
            {{
              new Date(post.postDate).toLocaleDateString('en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            }}
          </h2>
        </div>

        <h2 class="text-slate-900 font-semibold">
          {{ post.author.firstName }} {{ post.author.lastName }}
          <span class="text-slate-900"> • </span>
          <span class="text-green-500 cursor-pointer">{{
            post.author.username
          }}</span>
        </h2>
      </div>
    </div>

    <h2 class="xl:p-3 xl:pl-7 xl:pr-7 xl:text-base text-slate-800">
      {{ post.content }}
    </h2>

    <div
      class="xl:w-full xl:pt-2 xl:pb-4 xl:pl-7 xl:pr-7 flex flex-row border-slate-100 rounded-b-md"
    >
      <div class=""></div>
      <div class="flex flex-row flex-grow">
        <i
          title="Discussion"
          class="fi fi-rr-comment xl:text-xl xl:mr-8 text-slate-600 hover:cursor-pointer hover:text-green-500"
        ></i>
      </div>
      <div class="flex flex-row justify-end">
        <i
          title="Criticize"
          class="fi fi-rr-megaphone xl:text-xl xl:mr-8 text-slate-600 hover:cursor-pointer hover:text-red-500"
        ></i>
        <i
          title="Praise"
          class="fi fi-rr-hand-holding-heart xl:text-xl text-slate-600 hover:cursor-pointer hover:text-green-500"
        ></i>
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
import 'typeface-oxygen'

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

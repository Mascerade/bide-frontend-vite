<template>
  <div class="bg-light-background">
    <navbar />
    <div
      class="flex flex-col justify-center items-center min-w-[100vw] min-h-[calc(100vh-3.5rem)]"
    >
      <div class="flex flex-col xl:w-5/12 xl:p-8 rounded-xl bg-white shadow-sm">
        <h1 class="xl:text-2xl xl:mb-8 text-green-500">Create Post</h1>
        <form class="flex flex-col items-center" @submit.prevent="submit()">
          <p
            class="text-red-500 self-start"
            v-for="title in titleErrors"
            :key="title"
          >
            {{ titleErrors }}
          </p>
          <input
            type="text"
            placeholder="Title"
            v-model="title"
            class="xl:h-9 xl:w-full xl:mb-8 text-md border-b-[1px] border-slate-400 italic focus:outline-none focus:border-slate-900"
          />
          <p
            class="text-red-500 self-start"
            v-for="error in contentErrors"
            :key="error"
          >
            {{ contentErrors }}
          </p>
          <textarea
            type="text"
            placeholder="Post Content"
            rows="5"
            v-model="content"
            class="xl:w-full xl:mb-9 text-md border-b-[1px] border-slate-400 resize-none focus:outline-none focus:border-slate-900"
          />
          <bubble-button
            type="submit"
            class="!w-3/5 !self-center !bg-green-500 hover:!bg-green-300"
            >Post</bubble-button
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'
import router from '@/router'
import { createPost } from '@/api/post'
import Navbar from '@/components/ui/Navbar.vue'
import BubbleButton from '@/components/group/GroupBubbleButton.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    Navbar,
    BubbleButton
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const titleErrors: Array<string> = []
    const contentErrors: Array<string> = []
    const title = ''
    const content = ''

    return {
      store,
      route,
      titleErrors,
      contentErrors,
      title,
      content
    }
  },
  methods: {
    inputValid(): boolean {
      if (this.title != '' && this.content != '') {
        return true
      } else if (this.title == '') {
        this.titleErrors.push('Title of post cannot be left blank.')
      } else if (this.content == '') {
        this.contentErrors.push('Content of post cannot be left blank')
      }
      return false
    },
    async submit() {
      this.titleErrors = []
      this.contentErrors = []
      if (this.inputValid()) {
        const result = await createPost(this.route.params.groupName as string, {
          title: this.title,
          content: this.content
        })

        if (result) {
          router.push(`/group/${this.route.params.groupName}`)
        }
      } else {
        return
      }
    }
  }
})
</script>

<template>
  <div v-if="group">
    <navbar class="shadow-sm"></navbar>
    <div class="flex flex-row">
      <!-- Left-Side Information About Users/General Group Information (Name/Title/Description) -->
      <div
        class="xl:w-96 xl:min-h-[calc(100vh-4rem)] flex flex-col bg-slate-100 shadow-md"
      >
        <!-- Group Profile Information -->
        <div class="xl:w-full xl:h-full xl:mt-4 flex flex-col items-center">
          <div
            class="h-32 w-32 bg-white rounded-full border-2 border-slate-600 shadow-md"
          >
            <img class="h-full rounded-full" :src="defaultProfileImg" alt="" />
          </div>

          <!-- Name, Title, and Description -->
          <div
            class="xl:w-full xl:pl-2 xl:pr-2 xl:mt-4 flex flex-col flex-grow items-center"
          >
            <h1 class="text-4xl font-medium">
              {{ group.title }}
            </h1>
            <h3 class="xl:mt-2 text-sm font-medium">{{ group.name }}</h3>
            <h2 class="xl:mt-2 text-center text-slate-800 font-medium">
              {{ group.description }}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h2>
          </div>

          <div class="w-full xl:mb-2 xl:pl-3 xl:pr-3">
            <div
              class="xl:pl-3 xl:pr-3 xl:pt-2 xl:pb-2 flex flex-row justify-center items-center bg-white rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
            >
              <p class="xl:text-2xl text-green-600 font-medium">Join!</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col xl:w-full xl:h-[calc(100vh-4rem)] xl:pl-12 xl:-pr-12"
      >
        <!-- Middle Post/Content Region -->
        <div class="flex flex-col justify-center xl:w-[calc(100%-3rem)]">
          <!-- Taskbar -->
          <div class="flex flex-row items-center xl:h-14 xl:w-full xl:mt-2">
            <div class="flex flex-grow">
              <navigation-item class="active">Home</navigation-item>
              <navigation-item>Announcements</navigation-item>
              <navigation-item>Messages</navigation-item>
            </div>

            <button
              class="xl:p-2 xl:mr-2 xl:ml-2 rounded-md hover:bg-green-100 active:bg-green-200"
            >
              <img class="xl:h-8 w-full" :src="searchIcon" alt="" />
            </button>
          </div>
          <div class="xl:w-full xl:pl-3 xl:pr-3 xl:mt-3">
            <post
              v-for="post in group.posts"
              :key="post.id"
              :post="post"
            ></post>
          </div>
        </div>
      </div>
    </div>
  </div>
  <not-found-error v-else></not-found-error>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../store'
import { getGroup } from '../api/group'
import NotFoundError from '../components/error/NotFoundError.vue'
import Navbar from '@/components/ui/Navbar.vue'
import NavigationItem from '@/components/group/NavigationItem.vue'
import Post from '@/components/group/Post.vue'
import searchIcon from '@/assets/icons/search-icon-group.svg'
import defaultProfileImg from '@/assets/empty-groups.png'
import joinGroupImg from '@/assets/icons/join-group-green.png'

export default defineComponent({
  components: {
    NotFoundError,
    Navbar,
    NavigationItem,
    Post
  },
  setup() {
    onMounted(async () => {
      const route = useRoute()
      const res = await getGroup(route.params.groupName as string)
      console.log(res)
    })
    const store = useStore()
    const group = computed(() => store.state.currentGroupViewing)

    return {
      store,
      group,
      searchIcon,
      defaultProfileImg,
      joinGroupImg
    }
  }
})
</script>

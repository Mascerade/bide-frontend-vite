<template>
  <div v-if="group" class="bg-slate-50">
    <navbar></navbar>
    <div class="flex flex-row">
      <div class="xl:w-96 xl:h-[calc(100vh-4rem)] bg-slate-100 shadow-md">
        <!-- Left-Side Information About Users/General Group Information (Name/Title/Description) -->
        <div
          class="xl:w-full xl:mt-4 flex flex-col justify-center items-center"
        >
          <!-- Group Profile Information -->
          <div
            class="h-32 w-32 bg-white rounded-full border-2 border-slate-600"
          >
            <img class="h-full rounded-full" :src="defaultProfileImg" alt="" />
          </div>
          <div
            class="xl:w-full xl:pl-2 xl:pr-2 xl:mt-4 flex flex-col justify-center items-center"
          >
            <!-- Name, Title, and Description -->
            <h1 class="text-4xl font-medium">
              {{ group.title }}
            </h1>
            <h3 class="xl:mt-2 text-sm font-medium">{{ group.name }}</h3>
            <h2 class="xl:mt-2 text-center">
              {{ group.description }}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h2>
          </div>
        </div>
      </div>

      <div class="flex flex-col xl:w-full xl:h-[calc(100vh-4rem)]">
        <!-- Middle Post/Content Region -->
        <div class="flex flex-col xl:w-[calc(100%-3rem)] xl:ml-12">
          <!-- Taskbar -->
          <div class="flex flex-row items-center xl:h-14 xl:w-11/12 xl:mt-2">
            <div class="flex flex-grow">
              <navigation-item class="bg-slate-200">Home</navigation-item>
              <navigation-item>Announcements</navigation-item>
              <navigation-item>Messages</navigation-item>
            </div>

            <button
              class="xl:p-2 xl:mr-2 xl:ml-2 rounded-md hover:bg-slate-100"
            >
              <img class="xl:h-8 w-full" :src="searchIcon" alt="" />
            </button>
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
import searchIcon from '@/assets/icons/search-icon-group.svg'
import defaultProfileImg from '@/assets/empty-groups.png'

export default defineComponent({
  components: {
    NotFoundError,
    Navbar,
    NavigationItem
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
      defaultProfileImg
    }
  }
})
</script>

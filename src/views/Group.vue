<template>
  <div
    class="flex flex-col w-full items-center bg-light-background"
    v-if="group"
  >
    <navbar class="w-full shadow-sm bg-white"></navbar>

    <div class="flex flex-col max-w-[1560px]">
      <div class="flex flex-row" v-if="memberOfGroup">
        <member-left-side-nav />
        <member-main-content />
      </div>

      <div class="flex flex-col" v-else>
        <!-- Group Header -->
        <div class="w-full xl:pl-14 xl:pr-14 xl:mt-4 xl:mb-6">
          <div
            class="flex flex-row w-full xl:h-56 justify-center bg-green-500 items-center rounded-xl shadow-md"
          >
            <img
              class="xl:h-44 xl:w-44 xl:mr-10 rounded-full border-2 border-slate-100 shadow-md"
              src="/src/assets/empty-groups.png"
              alt=""
            />
            <div>
              <h1 class="xl:text-6xl text-white font-semibold">
                {{ group.title }}
              </h1>
              <h2 class="xl:text-xl text-white font-semibold">
                @{{ group.name }}
              </h2>
            </div>
          </div>
        </div>

        <!-- Group Content -->
        <div class="flex flex-row xl:pl-14 xl:pr-14">
          <div class="xl:w-[22rem]">
            <div class="flex flex-row xl:p-4 xl:mb-2 rounded-lg bg-white">
              <span class="flex-grow text-lg text-green-500 font-medium"
                >Group Members:
              </span>
              <span class="text-xl text-gray-600 font-medium">
                {{ group.groupUsers.length }}</span
              >
            </div>
            <left-side-nav-bubble-general-information
              :title="'About'"
              :description="group.description"
            />
            <button
              class="xl:w-full xl:mt-2 xl:pl-3 xl:pr-3 xl:pt-2 xl:pb-2 flex flex-row justify-center items-center rounded-lg shadow-sm cursor-pointer bg-green-400 hover:bg-green-300"
            >
              <p class="xl:text-2xl text-white font-medium">Join!</p>
            </button>
          </div>
          <guest-main-content />
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
import LeftSideNavBubbleGeneralInformation from '@/components/group/left-side-nav-bubble/LeftSideNavBubbleGeneralInformation.vue'
import GuestLeftSideNav from '@/components/group/left-side-nav-bubble/GuestLeftSideNavBubble.vue'
import GuestMainContent from '@/components/group/main-content/GuestMainContent.vue'
import MemberLeftSideNav from '@/components/group/left-side-nav-og/MemberLeftSideNav.vue'
import MemberMainContent from '@/components/group/main-content/MemberMainContent.vue'
import Navbar from '@/components/ui/Navbar.vue'
import 'typeface-oxygen'
import 'typeface-quicksand'

export default defineComponent({
  components: {
    NotFoundError,
    GuestLeftSideNav,
    GuestMainContent,
    MemberLeftSideNav,
    MemberMainContent,
    Navbar,
    LeftSideNavBubbleGeneralInformation
  },
  setup() {
    onMounted(async () => {
      const route = useRoute()
      await getGroup(route.params.groupName as string)
    })
    const store = useStore()
    const user = computed(() => store.state.user)
    const group = computed(() => store.state.currentGroupViewing)
    const memberOfGroup = computed(() => store.getters.memberOfGroup)

    return {
      store,
      user,
      group,
      memberOfGroup
    }
  }
})
</script>

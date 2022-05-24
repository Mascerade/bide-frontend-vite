<template>
  <div v-if="group">
    <navbar class="border-b-2 border-slate-50"></navbar>
    <div class="flex flex-row" v-if="memberOfGroup">
      <!-- <member-left-side-nav /> -->
      <div class="xl:w-80 xl:min-h-[calc(100vh-4rem)] xl:p-4">
        <!-- Group Profile Information -->
        <div
          class="flex flex-col items-center w-full xl:p-2 xl:mb-3 rounded-md border-[1px] border-slate-100 shadow-sm"
        >
          <img
            class="xl:h-32 xl:w-32 shadow-md rounded-full border-2 border-slate-50"
            :src="defaultProfileImg"
            alt=""
          />
          <h2 class="xl:text-3xl font-medium font-oxygen">{{ group.title }}</h2>
          <h2 class="xl:text-lg font-bold text-green-500">@{{ group.name }}</h2>
        </div>

        <div class="xl:p-2 border-slate-300 shadow-md text-center">
          <h2 class="text-xl text-green-500 font-medium">About</h2>
          <h3>
            {{ group.description }} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </h3>
        </div>
      </div>
      <member-main-content />
    </div>
    <div class="flex flex-row" v-else>
      <guest-left-side-nav />
      <guest-main-content />
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
import GuestLeftSideNav from '@/components/group/guest/GuestLeftSideNav.vue'
import GuestMainContent from '@/components/group/guest/GuestMainContent.vue'
import MemberLeftSideNav from '@/components/group/member/MemberLeftSideNav.vue'
import MemberMainContent from '@/components/group/member/MemberMainContent.vue'
import Navbar from '@/components/ui/Navbar.vue'
import defaultProfileImg from '@/assets/empty-groups.png'
import 'typeface-oxygen'

export default defineComponent({
  components: {
    NotFoundError,
    GuestLeftSideNav,
    GuestMainContent,
    MemberLeftSideNav,
    MemberMainContent,
    Navbar
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
      memberOfGroup,
      defaultProfileImg
    }
  }
})
</script>

<template>
  <div class="font-comfortaa bg-slate-100">
    <navbar class="bg-white"></navbar>
    <div class="w-full h-[calc(100vh-4rem)] xl:min-h-[566px] flex flex-row">
      <div class="flex flex-col h-full xl:p-4 bg-slate-200 shadow-md">
        <div class="flex-grow">
          <user-profile-mini-card
            :username="user.username"
            :firstName="user.firstName"
            :lastName="user.lastName"
          ></user-profile-mini-card>
          <div class="xl:w-[270px] xl:mt-7 bg-white rounded-xl">
            <navigation-side-card-item
              class="rounded-t-lg text-green-700"
              :imgSrc="groupIconGreen"
              >Groups</navigation-side-card-item
            >
            <hr />
            <navigation-side-card-item
              class="text-slate-700"
              :imgSrc="recentActivityIcon"
              >Recent Activity</navigation-side-card-item
            >
            <hr />
            <navigation-side-card-item
              class="rounded-b-lg text-slate-700"
              :imgSrc="yourPostsIcon"
              >Your Posts</navigation-side-card-item
            >
          </div>
        </div>

        <div>
          <div class="xl:w-[270px] xl:mt-7 bg-white rounded-xl">
            <navigation-side-card-item
              class="rounded-t-lg text-slate-700"
              :imgSrc="profileIcon"
              >Profile</navigation-side-card-item
            >
            <hr />
            <navigation-side-card-item
              class="text-slate-700"
              :imgSrc="settingsIcon"
              >Settings</navigation-side-card-item
            >
            <hr />
            <navigation-side-card-item
              class="rounded-b-lg text-red-500"
              :imgSrc="logoutIcon"
              @click="logout"
              >Log Out</navigation-side-card-item
            >
          </div>
        </div>
      </div>

      <div class="flex flex-col flex-grow">
        <div class="flex xl:w-full lg:flex-row"></div>

        <div
          v-if="userGroups?.length && userGroups?.length > 0"
          class="flex w-full"
        >
          <div class="flex w-full flex-wrap xl:ml-5">
            <group-card
              v-for="userGroup in userGroups"
              :name="userGroup.group.name"
              :description="userGroup.group.description"
              :key="userGroup.group.name"
            ></group-card>
          </div>
        </div>

        <div v-else class="w-full m-auto xl:mt-8">
          <div class="xl:w-2/5 m-auto">
            <img class="w-full xl:max-w-xl m-auto" :src="emptyGroups" alt="" />
          </div>
          <div class="text-center xl:text-xl xl:mt-2">
            <h1>You're not part of any groups yet!</h1>
          </div>
          <div class="text-center xl:text-lg">
            <a class="hover:cursor-pointer underline">Find one.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import UnauthenticatedError from '@/components/error/UnauthenticatedError.vue'
import Navbar from '@/components/ui/Navbar.vue'
import UserProfileMiniCard from '@/components/user/UserProfileMiniCard.vue'
import NavigationSideCardItem from '@/components/user/NavigationSideCardItem.vue'
import GroupCard from '@/components/user/GroupCard.vue'
import { loadInitialUser, logout } from '../api/user'
import emptyGroups from '@/assets/empty-groups.png'
import groupIcon from '@/assets/icons/group-icon.png'
import yourPostsIcon from '@/assets/icons/your-posts.png'
import recentActivityIcon from '@/assets/icons/recent-activity.png'
import groupIconGreen from '@/assets/icons/group-icon-green.png'
import yourPostsIconGreen from '@/assets/icons/your-posts-green.png'
import recentActivityIconGreen from '@/assets/icons/recent-activity-green.png'
import profileIcon from '@/assets/icons/profile.png'
import settingsIcon from '@/assets/icons/settings.png'
import logoutIcon from '@/assets/icons/logout.png'
import 'typeface-comfortaa'
import { useStore, store } from '../store'
import router from '../router'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    UnauthenticatedError,
    Navbar,
    UserProfileMiniCard,
    NavigationSideCardItem,
    GroupCard
  },
  setup() {
    const store = useStore()
    const user = computed(() => store.state.user)
    const userGroups = computed(() => store.state.user?.userGroups)

    return {
      store,
      user,
      userGroups,
      emptyGroups,
      groupIcon,
      yourPostsIcon,
      recentActivityIcon,
      groupIconGreen,
      yourPostsIconGreen,
      recentActivityIconGreen,
      profileIcon,
      settingsIcon,
      logoutIcon
    }
  },
  methods: {
    logout() {
      logout().then((success) => {
        if (success) {
          this.store.commit('logOut')
          router.push('/signin')
        } else {
          console.log('Error logging out')
        }
      })
    }
  }
})
</script>

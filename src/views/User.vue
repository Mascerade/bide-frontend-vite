<template>
  <div>
    <user-navbar class="xl:mb-3"></user-navbar>
    <div class="w-full flex flex-row xl:pt-3">
      <div class="xl:ml-4">
        <user-profile></user-profile>
      </div>
      <div class="flex flex-grow">
        <div class="flex xl:w-full lg:flex-row flex-wrap">
          <user-pill-navbar>
            <template v-slot:pills>
              <navigation-pill :imgSrc="friendsPillImage">
                <template v-slot:title>Friends</template>
              </navigation-pill>
              <navigation-pill :imgSrc="groupPillImage" class="bg-green-400">
                <template v-slot:title>Groups</template>
              </navigation-pill>
              <navigation-pill :imgSrc="postsPill">
                <template v-slot:title>Posts</template>
              </navigation-pill>
              <!-- <div class="h-full w-2 border-l-2 border-gray-50"></div> -->
            </template>
          </user-pill-navbar>
          <div class="flex w-full justify-center">
            <div class="flex flex-wrap">
              <group-card></group-card>
              <group-card></group-card>
              <group-card></group-card>
              <group-card></group-card>
              <group-card></group-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserNavbar from '@/components/user/UserNavbar.vue'
import UserPillNavbar from '@/components/user/UserPillNavbar.vue'
import UserProfile from '@/components/user/UserProfile.vue'
import NavigationPill from '@/components/ui/NavigationPill.vue'
import GroupCard from '@/components/user/GroupCard.vue'
import friendsPillImage from '@/assets/tree.png'
import groupPillImage from '@/assets/vines.png'
import postsPill from '@/assets/icons/posts-pill.png'

export default defineComponent({
  components: {
    UserNavbar,
    UserPillNavbar,
    UserProfile,
    NavigationPill,
    GroupCard
  },
  setup() {
    const groupData = [
      {
        title: 'Programming101'
      }
    ]
    return {
      friendsPillImage,
      groupPillImage,
      postsPill
    }
  }
})
</script>

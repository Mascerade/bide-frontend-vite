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
            </template>
          </user-pill-navbar>
          <div v-if="groupData.length > 0" class="flex w-full">
            <div class="flex w-full flex-wrap xl:ml-5">
              <group-card
                v-for="group in groupData"
                :title="group.title"
                :description="group.description"
                :key="group.title"
              ></group-card>
            </div>
          </div>
          <div v-else class="w-full m-auto xl:mt-8">
            <div class="xl:w-2/5 items-center m-auto">
              <img
                class="w-full xl:max-w-xl m-auto"
                :src="emptyGroups"
                alt=""
              />
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
import emptyGroups from '@/assets/empty-groups.png'

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
      // {
      //   title: 'Programming101',
      //   description: 'A place to discuss and talk about learning to program!'
      // }
    ]
    return {
      friendsPillImage,
      groupPillImage,
      postsPill,
      groupData,
      emptyGroups
    }
  }
})
</script>

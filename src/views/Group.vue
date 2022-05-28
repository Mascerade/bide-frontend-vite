<template>
  <div v-if="group">
    <navbar class="border-b-2 border-slate-50"></navbar>
    <div class="flex flex-row" v-if="memberOfGroup">
      <member-left-side-nav />
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
import GuestLeftSideNav from '@/components/group/left-side-nav-bubble/GuestLeftSideNavBubble.vue'
import GuestMainContent from '@/components/group/main-content/GuestMainContent.vue'
import MemberLeftSideNav from '@/components/group/left-side-nav-og/MemberLeftSideNav.vue'
import MemberMainContent from '@/components/group/main-content/MemberMainContent.vue'
import Navbar from '@/components/ui/Navbar.vue'
import defaultProfileImg from '@/assets/empty-groups.png'
import 'typeface-oxygen'
import 'typeface-quicksand'

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

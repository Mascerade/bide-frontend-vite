<template>
  <div v-if="group">
    <navbar class="shadow-sm"></navbar>
    <div class="flex flex-row">
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
import GuestLeftSideNav from '@/components/group/guest/LeftSideNav.vue'
import GuestMainContent from '@/components/group/guest/MainContent.vue'
import Navbar from '@/components/ui/Navbar.vue'
import NavigationItem from '@/components/group/NavigationItem.vue'
import Post from '@/components/group/Post.vue'
import joinGroupImg from '@/assets/icons/join-group-green.png'

export default defineComponent({
  components: {
    NotFoundError,
    GuestLeftSideNav,
    GuestMainContent,
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
      joinGroupImg
    }
  }
})
</script>

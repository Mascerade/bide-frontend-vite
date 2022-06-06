<template>
  <div
    class="flex flex-col w-full items-center bg-light-background"
    v-if="group"
  >
    <navbar class="w-full bg-white"></navbar>
    <div class="max-w-[1560px]">
      <group-comfortable v-if="view == 'comfortable'" />
      <group-compact v-if="view == 'compact'" />
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

import GroupComfortable from '@/components/group/comfortable-view/GroupComfortable.vue'
import GroupCompact from '@/components/group/compact-view/GroupCompact.vue'
import Navbar from '@/components/ui/Navbar.vue'
import 'typeface-oxygen'
import 'typeface-quicksand'

export default defineComponent({
  components: {
    NotFoundError,
    Navbar,
    GroupComfortable,
    GroupCompact
  },
  setup() {
    onMounted(async () => {
      const route = useRoute()
      await getGroup(route.params.groupName as string)
    })
    const view: 'comfortable' | 'compact' = 'comfortable'
    const store = useStore()
    const user = computed(() => store.state.user)
    const group = computed(() => store.state.currentGroupViewing)
    const memberOfGroup = computed(() => store.getters.memberOfGroup)

    return {
      view,
      store,
      user,
      group,
      memberOfGroup
    }
  }
})
</script>

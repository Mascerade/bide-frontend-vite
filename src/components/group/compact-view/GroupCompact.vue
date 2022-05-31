<template>
  <div class="flex flex-row">
    <group-compact-left-side-member v-if="memberOfGroup" />
    <group-compact-left-side-guest v-else />
    <group-main-content-member class="xl:mt-4" v-if="memberOfGroup" />
    <group-main-content-guest class="xl:mt-4" v-else />
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import GroupCompactLeftSideMember from './GroupCompactLeftSideMember.vue'
import GroupCompactLeftSideGuest from './GroupCompactLeftSideGuest.vue'
import GroupMainContentMember from '@/components/group/main-content/GroupMainContentMember.vue'
import GroupMainContentGuest from '@/components/group/main-content/GroupMainContentGuest.vue'

export default defineComponent({
  components: {
    GroupCompactLeftSideMember,
    GroupCompactLeftSideGuest,
    GroupMainContentMember,
    GroupMainContentGuest
  },
  setup() {
    const store = useStore()
    const memberOfGroup = computed(() => store.getters.memberOfGroup)
    return {
      memberOfGroup
    }
  }
})
</script>

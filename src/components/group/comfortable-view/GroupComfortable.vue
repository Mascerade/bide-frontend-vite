<template>
  <group-comfortable-container>
    <group-comfortable-header />
    <group-comfortable-content-container>
      <group-comfortable-left-side-member v-if="memberOfGroup" />
      <group-comfortable-left-side-guest v-else />
      <group-main-content-member v-if="memberOfGroup" />
      <group-main-content-guest v-else />
    </group-comfortable-content-container>
  </group-comfortable-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import GroupComfortableContainer from '@/components/group/comfortable-view/GroupComfortableContainer.vue'
import GroupComfortableContentContainer from '@/components/group/comfortable-view/GroupComfortableContentContainer.vue'
import GroupComfortableHeader from '@/components/group/comfortable-view/GroupComfortableHeader.vue'
import GroupComfortableLeftSideMember from '@/components/group/comfortable-view/GroupComfortableLeftSideMember.vue'
import GroupComfortableLeftSideGuest from '@/components/group/comfortable-view/GroupComfortableLeftSideGuest.vue'
import GroupMainContentMember from '@/components/group/main-content/GroupMainContentMember.vue'
import GroupMainContentGuest from '@/components/group/main-content/GroupMainContentGuest.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    GroupComfortableContainer,
    GroupComfortableHeader,
    GroupComfortableContentContainer,
    GroupComfortableLeftSideMember,
    GroupComfortableLeftSideGuest,
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

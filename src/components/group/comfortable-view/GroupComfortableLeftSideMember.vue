<template>
  <group-comfortable-left-side-container>
    <group-bubble-small-info
      :title="'Group Members: '"
      :content="groupMembers"
    />
    <group-bubble-general-information
      :title="'About'"
      :content="groupDescription"
    />
  </group-comfortable-left-side-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import GroupComfortableLeftSideContainer from '@/components/group/comfortable-view/GroupComfortableLeftSideContainer.vue'
import GroupBubbleGeneralInformation from '@/components/group/GroupBubbleGeneralInformation.vue'
import GroupBubbleSmallInfo from '@/components/group/GroupBubbleSmallInfo.vue'
import GroupBubbleButton from '@/components/group/GroupBubbleButton.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    GroupComfortableLeftSideContainer,
    GroupBubbleGeneralInformation,
    GroupBubbleSmallInfo,
    GroupBubbleButton
  },
  setup() {
    const store = useStore()
    const groupDescription = computed(
      () => store.state.currentGroupViewing!.description
    )
    const groupMembers = computed(
      () => store.state.currentGroupViewing!.groupUsers!.length
    )
    return {
      groupMembers
    }
  }
})
</script>

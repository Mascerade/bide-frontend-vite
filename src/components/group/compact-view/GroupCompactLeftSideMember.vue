<template>
  <group-compact-left-side-container>
    <group-compact-profile :groupTitle="groupTitle" :groupName="groupName" />
    <group-bubble-general-information
      :title="'About'"
      :description="groupDescription"
    />
  </group-compact-left-side-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import GroupCompactLeftSideContainer from '@/components/group/compact-view/GroupCompactLeftSideContainer.vue'
import GroupCompactProfile from '@/components/group/compact-view/GroupCompactProfile.vue'
import GroupBubbleGeneralInformation from '@/components/group/GroupBubbleGeneralInformation.vue'
import GroupBubbleButton from '@/components/group/GroupBubbleButton.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    GroupCompactLeftSideContainer,
    GroupCompactProfile,
    GroupBubbleGeneralInformation,
    GroupBubbleButton
  },
  setup() {
    const store = useStore()
    const groupTitle = computed(() => store.state.currentGroupViewing!.title)
    const groupName = computed(() => store.state.currentGroupViewing!.name)
    const groupDescription = computed(
      () => store.state.currentGroupViewing!.description
    )
    return {
      groupTitle,
      groupName,
      groupDescription
    }
  }
})
</script>

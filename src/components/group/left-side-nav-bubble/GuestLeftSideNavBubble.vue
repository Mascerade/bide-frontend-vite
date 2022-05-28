<template>
  <left-side-nav-bubble-container>
    <left-side-nav-bubble-profile
      :groupTitle="group.title"
      :groupName="group.name"
    />
    <left-side-nav-bubble-general-information
      :title="'About'"
      :description="group.description"
    />
    <button
      class="xl:w-full xl:mt-2 xl:pl-3 xl:pr-3 xl:pt-2 xl:pb-2 flex flex-row justify-center items-center rounded-md shadow-sm cursor-pointer bg-green-400 hover:bg-green-300"
    >
      <p class="xl:text-2xl text-white font-medium">Join!</p>
    </button>
  </left-side-nav-bubble-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import LeftSideNavBubbleContainer from '@/components/group/left-side-nav-bubble/LeftSideNavBubbleContainer.vue'
import LeftSideNavBubbleProfile from '@/components/group/left-side-nav-bubble/LeftSideNavBubbleProfile.vue'
import LeftSideNavBubbleGeneralInformation from '@/components/group/left-side-nav-bubble/LeftSideNavBubbleGeneralInformation.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    LeftSideNavBubbleContainer,
    LeftSideNavBubbleProfile,
    LeftSideNavBubbleGeneralInformation
  },
  setup() {
    const store = useStore()
    const group = computed(() => store.state.currentGroupViewing)
    return {
      group
    }
  }
})
</script>

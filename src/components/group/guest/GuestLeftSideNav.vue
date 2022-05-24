<template>
  <!-- Left-Side Information About Users/General Group Information (Name/Title/Description) -->
  <left-side-nav-container>
    <left-side-nav-basic-info
      :groupTitle="group.title"
      :groupName="group.name"
      :groupDescription="group.description"
    />
    <div class="w-full xl:mb-2 xl:pl-3 xl:pr-3">
      <div
        class="xl:pl-3 xl:pr-3 xl:pt-2 xl:pb-2 flex flex-row justify-center items-center bg-white rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
      >
        <p class="xl:text-2xl text-green-600 font-medium">Join!</p>
      </div>
    </div>
  </left-side-nav-container>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import LeftSideNavContainer from '@/components/group/left-side-nav/LeftSideNavContainer.vue'
import LeftSideNavBasicInfo from '@/components/group/left-side-nav/LeftSideNavBasicInfo.vue'

export default defineComponent({
  components: {
    LeftSideNavContainer,
    LeftSideNavBasicInfo
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

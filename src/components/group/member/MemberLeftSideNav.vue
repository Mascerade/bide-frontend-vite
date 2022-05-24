<template>
  <!-- Left-Side Information About Users/General Group Information (Name/Title/Description) -->
  <left-side-nav-container>
    <left-side-nav-basic-info
      :groupTitle="group.title"
      :groupName="group.name"
      :groupDescription="group.description"
    />
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

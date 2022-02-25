<template>
  <div
    v-if="displayProfileSideNav"
    class="xl:h-screen xl:min-h-[500px] xl:w-72 flex flex-col border-r-2 border-gray-50 shadow-sm"
  >
    <div class="w-full xl:h-14 bg-green-400"></div>
    <profile-image class="relative xl:bottom-12 self-center"></profile-image>
    <div class="relative xl:bottom-12 xl:pt-2 xl:pl-2">
      <p class="xl:text-lg">@Username</p>
      <p class="xl:text-md xl:mt-2">First Name</p>
      <p class="xl:text-md xl:mt-1">Last Name</p>
      <p class="xl:text-md xl:mt-1">Description</p>
    </div>
    <hr class="relative xl:bottom-12" />
    <div class="relative flex-grow xl:bottom-12"></div>
    <hr class="relative xl:bottom-12" />
    <div class="relative xl:bottom-12 rounded-br-lg">sasdf</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '../../store/index'
import ProfileImage from '@/components/user/ProfileImage.vue'

export default defineComponent({
  components: {
    ProfileImage
  },
  setup() {
    const store = useStore()
    const displayProfileSideNav = computed(
      () => store.state.displayProfileSideNav
    )
    return {
      displayProfileSideNav
    }
  }
})
</script>

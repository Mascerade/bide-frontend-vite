<template>
  <div class="xl:w-full xl:h-12 flex flex-row items-center bg-white rounded-md">
    <div class="xl:h-full flex flex-grow">
      <slot></slot>
    </div>

    <button
      title="Search"
      class="flex flex-col xl:mr-4 justify-center items-center rounded-md"
    >
      <i
        class="xl:text-xl fi fi-rr-search text-slate-700 hover:text-green-500"
      ></i>
    </button>

    <button title="Post" class="xl:h-10 xl:w-10 xl:mr-4" v-if="memberOfGroup">
      <i
        class="xl:text-xl fi fi-rr-pencil text-slate-700 hover:text-green-500"
      ></i>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import searchIcon from '@/assets/icons/search-icon-group.svg'
import postIcon from '@/assets/icons/make-post.png'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const memberOfGroup = computed(() => store.getters.memberOfGroup)
    return {
      searchIcon,
      postIcon,
      memberOfGroup
    }
  }
})
</script>

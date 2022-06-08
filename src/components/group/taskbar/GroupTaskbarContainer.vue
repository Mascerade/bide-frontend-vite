<template>
  <div class="xl:w-full xl:h-12 flex flex-row items-center bg-white rounded-md">
    <div class="xl:h-full flex flex-grow">
      <slot></slot>
    </div>

    <button
      title="Search"
      class="flex flex-col xl:mr-8 justify-center items-center rounded-md"
    >
      <i
        class="xl:text-xl fi fi-rr-search text-slate-700 hover:text-green-500"
      ></i>
    </button>

    <router-link
      title="Post"
      class="flex flex-col justify-center xl:h-10 xl:w-10 xl:mr-4"
      :to="`/group/${groupName}/create-post`"
      v-if="memberOfGroup"
    >
      <i
        class="xl:text-xl fi fi-rr-pencil text-slate-700 hover:text-green-500"
      ></i>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import searchIcon from '@/assets/icons/search-icon-group.svg'
import postIcon from '@/assets/icons/make-post.png'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const memberOfGroup = computed(() => store.getters.memberOfGroup)
    const groupId = store.state.currentGroupViewing!.id
    const groupName = store.state.currentGroupViewing!.name
    const groupTitle = store.state.currentGroupViewing!.title
    return {
      store,
      router,
      searchIcon,
      postIcon,
      memberOfGroup,
      groupId,
      groupName,
      groupTitle
    }
  }
})
</script>

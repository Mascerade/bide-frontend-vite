<template>
  <div class="w-full xl:pl-14 xl:pr-14 xl:mt-4 xl:mb-6">
    <div
      class="flex flex-row w-full xl:h-56 justify-center bg-green-500 items-center rounded-xl shadow-md"
    >
      <img
        class="xl:h-44 xl:w-44 xl:mr-10 rounded-full border-2 border-slate-100 shadow-md"
        src="/src/assets/empty-groups.png"
        alt=""
      />
      <div>
        <h1 class="xl:text-6xl text-white font-semibold">
          {{ groupTitle }}
        </h1>
        <h2 class="xl:text-xl text-white font-semibold">@{{ groupName }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const groupTitle = computed(() => store.state.currentGroupViewing!.title)
    const groupName = computed(() => store.state.currentGroupViewing!.name)
    return {
      groupTitle,
      groupName
    }
  }
})
</script>

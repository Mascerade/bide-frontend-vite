<template>
  <div
    class="flex flex-row items-center bg-white w-full xl:p-3 border-b-[1px] border-gray-300 last:border-none"
  >
    <img
      src="/src/assets/icons/default-profile-img-2.png"
      alt=""
      class="xl:w-10 xl:h-10 rounded-full shadow-sm"
    />
    <div class="w-full">
      <h2 class="text-slate-800 text-center">{{ firstName }} {{ lastName }}</h2>
      <h3 class="text-green-600 text-sm font-bold text-center">
        @{{ username }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    firstName: {
      required: true,
      type: String
    },
    lastName: {
      required: true,
      type: String
    },
    username: {
      required: true,
      type: String
    }
  },
  setup() {}
})
</script>

<template>
  <div
    class="flex flex-row font-quicksand items-center lg:h-14 lg:pl-10 xl:pl-14 lg:pr-10 xl:pr-14"
  >
    <img :src="logo" alt="" class="xl:h-8 xl:w-8 xl:mr-2" />
    <h1
      class="text-gray-700 font-medium lg:text-3xl xl:text-4xl lg:pr-14 xl:pr-20"
    >
      Bide
    </h1>
    <div class="h-full flex flex-grow flex-row items-center">
      <input
        type="text"
        :placeholder="'Search Bide'"
        class="h-3/4 w-3/4 pl-4 text-xl bg-gray-100 rounded-xl focus:outline-none"
      />
    </div>
    <div>
      <div
        class="flex flex-row items-center xl:p-1.5 border-[1px] border-[transparent] hover:border-slate-300 hover:cursor-pointer rounded-md"
        v-if="username"
      >
        <img
          class="xl:w-8 xl:h-8 xl:mr-2 rounded-full hover:cursor-pointer shadow-md"
          src="/src/assets/icons/default-profile-img-2.png"
          alt=""
        />
        <span class="text-slate-700 xl:text-md font-bold">{{ username }}</span>
        <i
          class="xl:text-md xl:mt-2 fi fi-rr-angle-small-down text-slate-800"
        ></i>
      </div>
      <div v-else>
        <nav-button :to="{ path: '/signin' }">Log In</nav-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import logo from '@/assets/icons/logo.png'
import { useStore } from '@/store'
import NavButton from '@/components/navigation/NavButton.vue'

export default defineComponent({
  components: {
    NavButton
  },
  setup() {
    const store = useStore()
    const username = computed(() => store.state.user?.username)
    return {
      logo,
      username
    }
  }
})
</script>

<style lang="css"></style>

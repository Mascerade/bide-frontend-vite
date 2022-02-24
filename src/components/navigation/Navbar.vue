<template>
  <div
    class="flex flex-row items-center lg:h-16 xl:h-16 lg:pl-10 xl:pl-14 lg:pr-10 xl:pr-14 shadow-md"
  >
    <h1
      class="text-gray-700 font-medium lg:text-3xl xl:text-5xl lg:pr-14 xl:pr-20"
    >
      Bide
    </h1>
    <div class="flex flex-grow flex-row">
      <nav-link class="lg:mr-8 xl:mr-14">Philosophy</nav-link>
      <nav-link>Features</nav-link>
    </div>
    <div>
      <nav-button :to="{ path: '/signup' }" class="lg:mr-4">
        Sign Up
      </nav-button>
      <nav-button :to="{ path: '/signin' }"> Log In </nav-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavButton from './NavButton.vue'
import NavLink from './NavLink.vue'

export default defineComponent({
  components: {
    NavButton,
    NavLink
  }
})
</script>

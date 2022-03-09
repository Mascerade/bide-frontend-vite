<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <h1 class="xl:text-3xl xl:mb-10">Unauthorized for Access to this User!</h1>
    <img class="xl:w-96" :src="errorImg" alt="" />
    <general-button @click="reRouteToSignin()" class="xl:mt-10"
      >Log In</general-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GeneralButton from '../ui/GeneralButton.vue'
import errorImg from '../../assets/icons/error.png'
import router from '../../router'

export default defineComponent({
  components: {
    GeneralButton
  },
  setup() {
    return {
      errorImg
    }
  },
  methods: {
    reRouteToSignin() {
      router.push('/signin')
    }
  }
})
</script>

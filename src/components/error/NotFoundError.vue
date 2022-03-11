<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <h1 class="xl:text-3xl xl:mb-10">This group does not exist!</h1>
    <img class="xl:w-96" :src="errorImg" alt="" />
    <general-button @click="goBack()" class="xl:mt-10">Back</general-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GeneralButton from '../ui/GeneralButton.vue'
import errorImg from '../../assets/icons/404-error.png'
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
    goBack() {
      router.back()
    }
  }
})
</script>

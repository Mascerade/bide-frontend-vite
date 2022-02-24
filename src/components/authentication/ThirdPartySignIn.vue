<template>
  <div class="lg:mb-6 xl:mb-8 flex flex-row justify-center">
    <auth-service-button class="mr-8" :src="google"></auth-service-button>
    <auth-service-button class="mr-8" :src="facebook"></auth-service-button>
    <auth-service-button :src="twitter"></auth-service-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthServiceButton from '@/components/authentication/AuthServiceButton.vue'
import google from '@/assets/icons/google.png'
import facebook from '@/assets/icons/facebook.png'
import twitter from '@/assets/icons/twitter.png'

export default defineComponent({
  components: {
    AuthServiceButton
  },
  setup() {
    return {
      google,
      facebook,
      twitter
    }
  }
})
</script>

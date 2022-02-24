<template>
  <auth-layout
    class="lg:flex-row-reverse"
    otherForm="/signup"
    :imgSrc="forest4"
  >
    <template v-slot:title>Sign In</template>
    <template v-slot:inputs>
      <form-input
        :placeholder="'Username'"
        v-model:inputBind="username"
      ></form-input>
      <form-input
        :placeholder="'Password'"
        v-model:inputBind="password"
        disabled
      ></form-input>
    </template>

    <template v-slot:button>
      <general-button class="xl:mt-6 xl:pr-32 xl:pl-32">Log In</general-button>
    </template>
    <router-link class="xl:mt-4 xl:text-xl underline text-gray-700" :to="'/'"
      >Back</router-link
    >
    <template v-slot:other-form-text>Create Account</template>

    <template v-slot:top-image-desc>Welcome</template>
    <template v-slot:bottom-image-desc>Back</template>
  </auth-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AuthLayout from '@/components/authentication/AuthLayout.vue'
import FormInput from '@/components/authentication/FormInput.vue'
import GeneralButton from '@/components/ui/GeneralButton.vue'
import forest4 from '@/assets/forest-4.png'

export default defineComponent({
  components: {
    AuthLayout,
    FormInput,
    GeneralButton
  },
  setup() {
    const username = ref('')
    const password = ref('')
    return {
      username,
      password,
      forest4
    }
  }
})
</script>

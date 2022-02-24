<template>
  <auth-layout otherForm="/signin" :imgSrc="forest3">
    <template v-slot:title>Create Account</template>
    <template v-slot:inputs>
      <form-input
        :placeholder="'First Name'"
        v-model:inputBind="firstName"
      ></form-input>
      <form-input
        :placeholder="'Last Name'"
        v-model:inputBind="lastName"
      ></form-input>
      <form-input
        :placeholder="'Username'"
        v-model:inputBind="username"
      ></form-input>
      <form-input
        :placeholder="'Email'"
        v-model:inputBind="email"
        disabled
      ></form-input>
      <form-input
        :placeholder="'Password'"
        v-model:inputBind="password"
        disabled
      ></form-input>
    </template>

    <template v-slot:button>
      <general-button class="xl:mt-6 xl:pr-32 xl:pl-32">Sign Up</general-button>
    </template>
    <router-link class="xl:mt-4 xl:text-xl underline text-gray-700" :to="'/'"
      >Back</router-link
    >
    <template v-slot:other-form-text
      >Already Have an Account? Log In Here.</template
    >

    <template v-slot:top-image-desc>Start Finding</template>
    <template v-slot:bottom-image-desc>Your Community</template>
  </auth-layout>
</template>

<script lang="ts">
import { defineComponent, ref, Slot } from 'vue'
import AuthLayout from '@/components/authentication/AuthLayout.vue'
import FormInput from '@/components/authentication/FormInput.vue'
import GeneralButton from '@/components/ui/GeneralButton.vue'
import forest3 from '@/assets/forest-3.png'

export default defineComponent({
  components: {
    AuthLayout,
    FormInput,
    GeneralButton
  },
  setup() {
    const username = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    return {
      username,
      firstName,
      lastName,
      email,
      password,
      forest3
    }
  }
})
</script>

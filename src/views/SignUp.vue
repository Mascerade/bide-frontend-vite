<template>
  <auth-layout otherForm="/signin" :imgSrc="forest3">
    <template v-slot:title>Create Account</template>
    <template v-slot:form>
      <form
        @submit.prevent="submit"
        class="w-full flex flex-col justify-center items-center"
      >
        <form-input
          :placeholder="'First Name'"
          v-model:inputBind="firstName"
          :errors="firstNameErrors"
        ></form-input>
        <form-input
          :placeholder="'Last Name'"
          v-model:inputBind="lastName"
          :errors="lastNameErrors"
        ></form-input>
        <form-input
          :placeholder="'Username'"
          v-model:inputBind="username"
          :errors="usernameErrors"
        ></form-input>
        <form-input
          :placeholder="'Email'"
          v-model:inputBind="email"
          :errors="emailErrors"
        ></form-input>
        <form-input
          :placeholder="'Password'"
          v-model:inputBind="password"
          :errors="passwordErrors"
          password
          disabled
        ></form-input>
        <general-button type="submit" class="xl:mt-6 xl:pr-32 xl:pl-32"
          >Sign Up</general-button
        >
      </form>
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
import { defineComponent, ref } from 'vue'
import AuthLayout from '@/components/authentication/AuthLayout.vue'
import FormInput from '@/components/authentication/FormInput.vue'
import GeneralButton from '@/components/ui/GeneralButton.vue'
import forest3 from '@/assets/forest-3.png'
import { SERVER } from '@/constants/env'
import axios, { AxiosError } from 'axios'

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
    const usernameErrors = ref([] as Array<string>)
    const firstNameErrors = ref([] as Array<string>)
    const lastNameErrors = ref([] as Array<string>)
    const emailErrors = ref([] as Array<string>)
    const passwordErrors = ref([] as Array<string>)
    return {
      username,
      firstName,
      lastName,
      email,
      password,
      usernameErrors,
      firstNameErrors,
      lastNameErrors,
      emailErrors,
      passwordErrors,
      forest3
    }
  },
  methods: {
    async validateForm(): Promise<{
      statusCode: number
      userIdErrors: Array<string>
      usernameErrors: Array<string>
    }> {
      const res = await axios
        .get(`${SERVER}/validate-new-user`, {
          params: {
            userId: this.email,
            username: this.username
          }
        })
        .catch((e: AxiosError) => {
          return e.response
        })

      let ret = res?.data
      ret['statusCode'] = res?.status

      return ret
    },
    async submit() {
      this.usernameErrors = []
      this.emailErrors = []

      // Make sure that the username and email have not been left blank
      if (this.username == '') {
        this.usernameErrors.push('Username cannot be left blank.')
      }
      if (this.email == '') {
        this.emailErrors.push('Email cannot be left blank.')
      }

      // If either have been left blank, don't pursue server validation
      if (this.usernameErrors.length > 0 || this.emailErrors.length > 0) {
        return
      }

      // Validate the form from the server and display the results
      const validation = await this.validateForm()
      this.usernameErrors = validation.usernameErrors
      this.emailErrors = validation.userIdErrors
    }
  }
})
</script>

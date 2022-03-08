<template>
  <auth-layout
    class="lg:flex-row-reverse"
    otherForm="/signup"
    :imgSrc="forest4"
  >
    <template v-slot:title>Sign In</template>
    <template v-slot:form>
      <form
        @submit.prevent="submit"
        class="w-full flex flex-col justify-center items-center"
      >
        <form-input
          :placeholder="'Email'"
          v-model:inputBind="email"
          :errors="emailErrors"
        ></form-input>
        <form-input
          :placeholder="'Password'"
          v-model:inputBind="password"
          disabled
          :errors="passwordErrors"
        ></form-input>
        <general-button type="submit" class="xl:mt-6 xl:pr-32 xl:pl-32"
          >Log In</general-button
        >
      </form>
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
import { computed, defineComponent, ref } from 'vue'
import AuthLayout from '@/components/authentication/AuthLayout.vue'
import FormInput from '@/components/authentication/FormInput.vue'
import GeneralButton from '@/components/ui/GeneralButton.vue'
import forest4 from '@/assets/forest-4.png'
import { getUser } from '@/api/user'
import router from '@/router'
import { useStore } from '../store'

export default defineComponent({
  components: {
    AuthLayout,
    FormInput,
    GeneralButton
  },
  setup() {
    const store = useStore()
    const user = computed(() => store.state.user)
    const email = ref('')
    const password = ref('')
    const emailErrors = ref([] as Array<string>)
    const passwordErrors = ref([] as Array<string>)
    return {
      user,
      email,
      password,
      emailErrors,
      passwordErrors,
      forest4
    }
  },
  methods: {
    async submit() {
      this.emailErrors = []
      if (this.email == '') {
        this.emailErrors.push('Email cannot be left blank.')
        return
      }
      const res = await getUser('', this.email, undefined)
      if (res) {
        router.push(`/dashboard/${this.user?.username}`)
      } else {
        this.emailErrors.push('User could not be found.')
      }
    }
  }
})
</script>

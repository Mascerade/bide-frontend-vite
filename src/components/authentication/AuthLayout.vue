<template>
  <div class="fullscreen xl:min-h-[750px] flex lg:flex-row">
    <div class="lg:h-full lg:w-3/5 flex justify-center items-center">
      <div class="lg:w-3/4 flex flex-col items-center">
        <h1
          class="lg:text-5xl xl:text-6xl lg:mb-6 xl:mb-8 text-center font-semibold text-green-500"
        >
          <slot name="title"></slot>
        </h1>

        <third-party-sign-in></third-party-sign-in>

        <h2
          class="lg:mb-4 xl:mb-6 lg:text-md text-gray-600 font-medium text-center"
        >
          Or Sign-In Manually
        </h2>

        <slot name="inputs"></slot>

        <slot name="button"></slot>

        <router-link
          class="lg:mt-4 lg:text-lg xl:text-xl underline text-gray-700"
          :to="'/'"
          >Back</router-link
        >

        <router-link
          class="lg:mt-1 lg:text-lg xl:text-xl underline text-gray-700"
          :to="otherForm"
          ><slot name="other-form-text"></slot
        ></router-link>
      </div>
    </div>

    <div
      class="lg:h-full lg:w-2/5 flex flex-col justify-center items-center bg-green-300"
    >
      <h1
        class="font-semibold text-gray-700 lg:text-5xl xl:text-6xl lg:mb-4 xl:mb-5"
      >
        <slot name="top-image-desc"></slot>
      </h1>
      <div class="lg:pl-2 lg:pr-2">
        <img :src="imgSrc" alt="Forest" class="shadow-2xl rounded-full" />
      </div>
      <h1
        class="font-semibold text-gray-700 lg:text-5xl xl:text-6xl lg:mt-4 xl:mt-5"
      >
        <slot name="bottom-image-desc"></slot>
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThirdPartySignIn from '@/components/authentication/ThirdPartySignIn.vue'

export default defineComponent({
  props: {
    otherForm: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    }
  },
  components: {
    ThirdPartySignIn
  }
})
</script>

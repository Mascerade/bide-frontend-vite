<template>
  <div class="w-full flex flex-col">
    <navbar />
    <div class="">
      <div class="w-full flex flex-col lg:flex-row lg:mb-24 lg:mt-20">
        <div
          class="flex items-center justify-center w-full lg:w-1/2 lg:pl-24 xl:pl-32"
        >
          <div>
            <h1 class="text-green-500 font-medium lg:text-5xl xl:text-6xl">
              Facilitating Productive Online Interactions
            </h1>
            <h2
              class="text-gray-600 lg:text-2xl xl:text-3xl xl:leading-10 lg:mt-2 xl:mt-4 lg:pt-2 xl:pt-4 lg:pr-24 xl:pr-36"
            >
              A social platform designed to make it easier for people to engage
              respectfully <span class="text-green-500">and</span> with a sense
              of purpose.
            </h2>
            <general-button class="lg:mt-8">Get Started</general-button>
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center w-full lg:w-1/2 xl:pr-8"
        >
          <box-card>Create or Find Online Communities</box-card>
          <img
            class="lg:h-20 lg:w-20 xl:h-24 xl:w-24 xl:mt-3 xl:mb-3"
            src="../assets/icons/down-arrow-green-teal.png"
            alt="Down Arrow"
          />
          <box-card>Get Feedback</box-card>
          <img
            class="lg:h-20 lg:w-20 xl:h-24 xl:w-24 xl:mt-3 xl:mb-3"
            src="../assets/icons/down-arrow-green-teal.png"
            alt="Down Arrow"
          />
          <box-card>Grow as a Group</box-card>
        </div>
      </div>
    </div>

    <banner class="" />

    <div class="bg-gray-100 lg:pt-14 xl:pt-24">
      <div>
        <h1
          class="text-green-500 font-medium lg:text-4xl xl:text-5xl text-center xl:mb-5"
        >
          Bide is Dedicated to Connecting People
        </h1>
        <h2
          class="text-gray-600 font-medium lg:text-xl xl:text-2xl text-center lg:mb-12 xl:mb-16 lg:pr-48 xl:pr-96 lg:pl-48 xl:pl-96"
        >
          and nothing else. We simply want to be the bridge from
          <span class="text-green-500">you</span> to those who have similar
          <span class="text-green-500">interests</span> to you.
        </h2>
      </div>

      <div
        class="w-full flex flex-col justify-center lg:flex-row lg:pl-14 xl:pl-32 lg:pr-14 xl:pr-32 lg:mb-20 xl:mb-24"
      >
        <image-caption-container :imgSrc="growingPlant">
          <template v-slot:title> Groups for Your Specific Interests </template>
          <template v-slot:caption>
            Many other social media axlorithms promote
            <span class="text-green-500">hate</span> and
            <span class="text-green-500">negativity</span>. Bide attempts to
            redefine the way we use social media in order to have
            <span class="text-green-500">discussions</span> and build on one
            another.
          </template>
        </image-caption-container>

        <image-caption-container :imgSrc="tree">
          <template v-slot:title> Cooperation Over Arguments </template>
          <template v-slot:caption>
            Many other social media axlorithms promote
            <span class="text-green-500">hate</span> and
            <span class="text-green-500">negativity</span>. Bide attempts to
            redefine the way we use social media in order to have
            <span class="text-green-500">discussions</span> and build on one
            another.
          </template>
        </image-caption-container>

        <image-caption-container :imgSrc="forest">
          <template v-slot:title> The Community Decides Everything </template>
          <template v-slot:caption>
            Once in a group, the group as a
            <span class="text-green-500">whole</span> makes decisions. Bide
            brings true
            <span class="text-green-500">deomocratic processes</span>
            to the internet. This way, the
            <span class="text-green-500">people</span> are truly in control over
            what happens.
          </template>
        </image-caption-container>
      </div>
    </div>

    <div class="w-full lg:pt-16 xl:pt-24 lg:pb-16 xl:pb-24 bg-green-500">
      <h1 class="text-green-50 font-medium lg:text-4xl lg:text-5xl text-center">
        Differentiating Features
      </h1>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../components/navigation/Navbar.vue'
import BoxCard from '../components/landing/BoxCard.vue'
import Banner from '../components/landing/Banner.vue'
import ImageCaptionContainer from '@/components/landing/ImageCaptionContainer.vue'
import GeneralButton from '@/components/ui/GeneralButton.vue'
import growingPlant from '@/assets/growing-plant.png'
import tree from '@/assets/tree.png'
import forest from '@/assets/forest.png'

export default defineComponent({
  components: {
    Navbar,
    BoxCard,
    Banner,
    ImageCaptionContainer,
    GeneralButton
  },
  setup() {
    return {
      growingPlant,
      tree,
      forest
    }
  }
})
</script>

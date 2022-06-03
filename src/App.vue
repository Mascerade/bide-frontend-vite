<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'typeface-quicksand'
import 'typeface-montserrat'
import 'typeface-poppins'
import 'typeface-raleway'
import 'typeface-rubik'
import 'typeface-nunito-sans'
import 'typeface-work-sans'
import 'typeface-muli'
import 'typeface-mulish'

export default defineComponent({
  name: 'App'
})
</script>

<style>
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

.green-gradient-1 {
  background-color: #08e1ae;
  background-image: linear-gradient(315deg, #08e1ae 0%, #98de5b 74%);
}

.green-gradient-2 {
  background: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}

.green-gradient-3 {
  background-color: white;
  background-image: linear-gradient(300deg, #98de5b 52%, white 0%);
}

.green-gradient-4 {
  background: hsla(142, 71%, 45%, 1);

  background: radial-gradient(
    circle,
    hsla(142, 71%, 45%, 1) 0%,
    hsla(142, 69%, 58%, 0.8) 100%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(142, 71%, 45%, 1) 0%,
    hsla(142, 69%, 58%, 0.8) 100%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(142, 71%, 45%, 1) 0%,
    hsla(142, 69%, 58%, 0.8) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#22C55E", endColorstr="#4ADE80", GradientType=1 );
}
</style>

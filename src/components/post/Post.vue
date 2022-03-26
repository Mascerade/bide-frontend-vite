<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '../../types/database-models'

export default defineComponent({
  props: {
    user: {
      required: true
    }
  },
  setup() {}
})
</script>

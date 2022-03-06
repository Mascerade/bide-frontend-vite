<template>
  <div class="w-11/12 text-red-500">
    <p v-for="error in errors" :key="error">
      {{ error }}
    </p>
  </div>
  <input
    type="text"
    :placeholder="placeholder"
    :value="inputBind"
    @input="$emit('update:inputBind', $event.target.value)"
    class="h-12 w-11/12 pl-4 text-xl bg-gray-100 rounded-xl focus:outline-none mb-4"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    placeholder: {
      type: String
    },
    inputBind: {
      type: String,
      required: true
    },
    errors: {
      type: Array,
      required: true
    }
  },
  emits: ['update:inputBind']
})
</script>

<style></style>

<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="inputBind"
    @input="$emit('update:inputBind', $event.target.value)"
    class="h-12 w-11/12 pl-4 text-xl bg-gray-100 rounded-xl focus:outline-none mb-4"
  />
</template>

<script>
import { defineComponent } from 'vue'

//       style="background-color: #f4f8f7"

export default defineComponent({
  props: {
    placeholder: {
      type: String
    },
    inputBind: {
      type: String,
      required: true
    }
  },
  emits: ['update:inputBind']
})
</script>

<style></style>

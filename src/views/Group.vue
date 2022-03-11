<template>
  <div v-if="group"></div>
  <not-found-error v-else></not-found-error>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../store'
import { getGroup } from '../api/group'
import NotFoundError from '../components/error/NotFoundError.vue'

export default defineComponent({
  components: {
    NotFoundError
  },
  setup() {
    onMounted(async () => {
      const route = useRoute()
      const res = await getGroup(parseInt(route.params.groupName as string))
      console.log(res)
    })
    const store = useStore()
    const group = computed(() => store.state.groupViewing)

    return {
      store,
      group
    }
  }
})
</script>

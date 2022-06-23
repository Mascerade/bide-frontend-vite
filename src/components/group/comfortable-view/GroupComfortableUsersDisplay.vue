<template>
  <div class="flex flex-col xl:w-[22rem]">
    <div
      class="flex flex-col xl:p-4 bg-white rounded-md"
      v-if="tokenUsers.length != 0"
    >
      <h2 class="text-green-500 font-medium">Token Holders</h2>
      <group-bubble-user-card
        v-for="user in tokenUsers"
        :key="user.id"
        :title="user.firstName"
        :lastName="user.lastName"
        :username="user.username"
      ></group-bubble-user-card>
    </div>

    <div
      class="flex flex-col xl:p-4 bg-white rounded-md"
      v-if="regularUsers.length != 0"
    >
      <h2 class="text-lg text-green-500 font-medium">Regular Users</h2>
      <group-bubble-user-card
        v-for="user in regularUsers"
        :key="user.id"
        :title="user.firstName"
        :lastName="user.lastName"
        :username="user.username"
      ></group-bubble-user-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import GroupBubbleUserCard from '@/components/group/GroupBubbleUserCard.vue'
import { User } from '@/types/database-models'

export default defineComponent({
  components: {
    GroupBubbleUserCard
  },

  setup() {
    const store = useStore()
    const groupUsers = store.state.currentGroupViewing?.groupUsers

    let usersInGroup: User[] = []
    groupUsers?.forEach((groupUser) => {
      usersInGroup.push(groupUser.user!)
    })

    // Separate the users who have tokens and those who do not
    let tokenUsers: User[] = []
    let regularUsers: User[] = []
    usersInGroup.forEach((user) => {
      let tokenFound = false

      console.log(user)
      // Check whether or not the user has a token associated with this group
      user.groupGeneralTokens?.forEach((groupGeneralToken) => {
        if (groupGeneralToken.groupId == store.state.currentGroupViewing?.id) {
          tokenUsers.push(user)
          tokenFound = true
        }
      })

      // If no token was found, then the user does not have any special permissions on the group
      if (!tokenFound) {
        regularUsers.push(user)
      }
    })

    console.log('Token Users:')
    console.log(tokenUsers)
    console.log('\nRegular Users:')
    console.log(regularUsers)

    return {
      store,
      tokenUsers,
      regularUsers
    }
  }
})
</script>

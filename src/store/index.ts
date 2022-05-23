import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Group, Post, User } from '../types/database-models'

type State = {
  user: User | null
  currentGroupViewing: Group | null
  displayProfileSideNav: boolean
}

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
    user: null,
    currentGroupViewing: null,
    displayProfileSideNav: true
  },
  mutations: {
    toggleProfileSideNav(state) {
      state.displayProfileSideNav = !state.displayProfileSideNav
    },
    changeUser(state, user: User) {
      console.log(user)
      state.user = user
    },
    logOut(state) {
      state.user = null
    },
    changeGroupViewing(state, group: Group) {
      state.currentGroupViewing = group
      console.log(state.currentGroupViewing)
    }
  },
  getters: {
    memberOfGroup(state) {
      // Check whether a user is a part of a group
      if (state.user && state.user.userGroups && state.currentGroupViewing) {
        for (let group of state.user.userGroups) {
          console.log(
            `UserID: ${group.groupId} GroupID: ${state.currentGroupViewing.id}`
          )
          if (state.currentGroupViewing.id == group.groupId) {
            return true
          }
        }
      }
      return false
    }
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}

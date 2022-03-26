import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Group, Post, User } from '../types/database-models'

type State = {
  user: User | null
  groupViewing: Group | null
  displayProfileSideNav: boolean
}

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
    user: null,
    groupViewing: null,
    displayProfileSideNav: true
  },
  mutations: {
    toggleProfileSideNav(state) {
      state.displayProfileSideNav = !state.displayProfileSideNav
    },
    changeUser(state, user: User) {
      state.user = user
    },
    logOut(state) {
      state.user = null
    },
    changeGroupViewing(state, group: Group) {
      state.groupViewing = group
      console.log(state.groupViewing)
    }
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}

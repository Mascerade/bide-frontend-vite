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
      state.user = user
    },
    logOut(state) {
      state.user = null
    },
    changeGroupViewing(state, group: Group) {
      state.currentGroupViewing = group
      console.log(state.currentGroupViewing)
    }
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}

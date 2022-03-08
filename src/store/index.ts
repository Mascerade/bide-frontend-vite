import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Group, Post, User } from '../types/databaseModels'

type State = {
  user: User | null
  displayProfileSideNav: boolean
}

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
    user: null,
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
    }
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}

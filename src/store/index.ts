import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Group, Post, User } from '../types/databaseModels'

type State = {
  user: User | null
  groups: String[]
  userPosts: Post[]
  displayProfileSideNav: boolean
}

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
    user: null,
    groups: [],
    userPosts: [],
    displayProfileSideNav: true
  },
  mutations: {
    toggleProfileSideNav(state) {
      state.displayProfileSideNav = !state.displayProfileSideNav
    },
    changeUser(state, user: User) {
      state.user = user
    },
    changeUsername(state, name: String) {
      if (state.user) state.user.firstName = name
    }
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}

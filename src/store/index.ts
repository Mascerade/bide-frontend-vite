import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { User } from '../types/databaseModels'

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
    }
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}

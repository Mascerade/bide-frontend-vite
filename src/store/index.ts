import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export const key: InjectionKey<Store<any>> = Symbol('store')

export const store = createStore({
  state: {
    displayProfileSideNav: true
  },
  mutations: {
    toggleProfileSideNav(state) {
      state.displayProfileSideNav = !state.displayProfileSideNav
    }
  }
})

export function useStore(): Store<any> {
  return baseUseStore(key)
}

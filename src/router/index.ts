import { createWebHistory, createRouter } from 'vue-router'
import Landing from '@/views/Landing.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import Dashboard from '@/views/Dashboard.vue'
import Group from '@/views/Group.vue'
import { store } from '../store'
import { loadInitialUser } from '../api/user'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: SignIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { authentication: 'required' },
    component: Dashboard
  },
  {
    path: '/group/:groupName',
    name: 'Group',
    meta: { authentication: 'optional' },
    component: Group
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log('beforeEach called')
  if (to.meta.authentication == 'required' || to.name == 'Sign In') {
    if (!store.state.user) {
      const user = await loadInitialUser()
      console.log(user)
      if (user) {
        store.commit('changeUser', user)
        if (to.name == 'Sign In') {
          next({ name: 'Dashboard' })
          return
        }
        console.log('User found, navigating as usual')
        next()
      } else {
        if (to.name == 'Sign In') {
          console.log('going to sign-in because user not found from cookie')
          next()
          return
        }
        next({ name: 'Sign In' })
      }
    } else {
      if (to.name == 'Sign In') {
        console.log('User exists in store and navigating to dashboard')
        next({ name: 'Dashboard' })
        return
      }
      next()
    }
  } else if (to.meta.authentication == 'optional') {
    const user = await loadInitialUser()
    if (user) {
      store.commit('changeUser', user)
      next()
      return
    }
  } else {
    next()
  }
})

router.beforeResolve(async (to, from) => {})

export default router

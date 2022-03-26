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
    meta: { authentication: true },
    component: Dashboard
  },
  {
    path: '/group/:groupName',
    name: 'Group',
    component: Group
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.authentication || to.name == 'Sign In') {
    if (!store.state.user) {
      const user = await loadInitialUser()
      if (user) {
        store.commit('changeUser', user)
        if (to.name == 'Sign In') {
          next({ name: 'Dashboard' })
        }
        next()
      } else {
        next({ name: 'Sign In' })
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

router.beforeResolve(async (to, from) => {})

export default router

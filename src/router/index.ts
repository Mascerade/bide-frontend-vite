import { createWebHistory, createRouter } from 'vue-router'
import Landing from '@/views/Landing.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import User from '@/views/User.vue'

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
    path: '/user/:username',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

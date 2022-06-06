import { createWebHistory, createRouter, RouterOptions } from 'vue-router'
import Landing from '@/views/Landing.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import Dashboard from '@/views/Dashboard.vue'
import Group from '@/views/Group.vue'
import CreatePost from '@/views/CreatePost.vue'
import { store } from '../store'
import { loadInitialUser } from '../api/user'
import { User } from '@/types/database-models'

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
  },
  {
    path: '/group/:groupName/create-post',
    name: 'Create Post',
    meta: { authentication: 'required', authorizedGroupMember: 'required' },
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log(to.meta)

  // Check specifically for when we are navigating to the sign in screen
  if (to.name == 'Sign In') {
    const user = await loadInitialUser()
    if (user) {
      store.commit('changeUser', user)
      if (from.name == 'Group') {
        next({ path: from.path })
        return
      } else {
        next({ name: 'Dashboard' })
      }
    } else {
      next()
      return
    }
  }

  // If nothing is in meta, then we do not have to do any checks
  if (Object.keys(to.meta).length == 0) {
    next()
    return
  }

  // Check authentication
  let user: User | null = {} as User
  if (
    to.meta.authentication == 'required' ||
    to.meta.authentication == 'optional'
  ) {
    user = await loadInitialUser()
    if (user) {
      store.commit('changeUser', user)
    }
  }

  console.log(!to.meta.authorizedGroupMember)

  // Just continue normal navigation if authentication is optional
  // because the user is now in the store.
  if (to.meta.authentication == 'optional') {
    next()
    return
  }

  // If being a group member is not required, go to route
  if (to.meta.authentication == 'required' && !to.meta.authorizedGroupMember) {
    if (user) {
      next()
      return
    } else {
      next({ name: 'Sign In' })
      return
    }
  }

  // Check for being a group member
  let authorizedGroupMember: boolean = false
  if (user && to.meta.authorizedGroupMember) {
    if (user?.userGroups) {
      for (let group of user?.userGroups) {
        if (to.params.groupName == group.group.name) {
          authorizedGroupMember = true
        }
      }
    }
  }

  // If it was required, only continue to the route if they are
  if (to.meta.authorizedGroupMember == 'required') {
    if (authorizedGroupMember) {
      next()
      return
    } else {
      next({ path: `/group/${to.params.groupName}` })
    }
  }
})

router.beforeResolve(async (to, from) => {})

export default router

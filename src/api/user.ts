import axios, { AxiosError } from 'axios'
import { CreateUser } from '@/types/database-models'
import { store } from '@/store'
import { SERVER } from '@/constants/env'
import { User } from '@/types/database-models'

export const createUser = async function (user: CreateUser) {
  const res = await axios
    .post(`${SERVER}/user`, user, { withCredentials: true })
    .catch((e: AxiosError) => {
      return e.response
    })
  if (res?.status == 201) {
    store.commit('changeUser', res.data.user)
    return true
  } else if (res?.status == 400) {
    return false
  }
}

export const checkUserCookie = async (): Promise<boolean> => {
  const res = await axios
    .get(`${SERVER}/user/cookie-check`, { withCredentials: true })
    .catch((e: AxiosError) => {
      return e.response
    })

  if (res) {
    if (res.status == 200) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export const loadInitialUser = async (): Promise<User | null> => {
  const res = await axios
    .get(`${SERVER}/user/initial-load`, { withCredentials: true })
    .catch((e: AxiosError) => {
      return e.response
    })

  if (res) {
    if (res.status == 200) {
      return res.data.user as User
    } else {
      return null
    }
  } else {
    return null
  }
}

export const login = async (
  password: String,
  email?: User['email'],
  username?: User['username']
): Promise<boolean> => {
  console.log(email)
  let dataToSend: any = {}
  dataToSend.password = password
  if (email != null) {
    dataToSend.email = email
  }
  if (username != null) {
    dataToSend.username = username
  }
  const res = await axios
    .get(`${SERVER}/user/login`, {
      params: { email: dataToSend.email },
      withCredentials: true
    })
    .catch((e: AxiosError) => {
      return e.response
    })
  if (res) {
    if (res.status == 200) {
      store.commit('changeUser', res.data.user)
      return true
    } else if (res.status < 500) {
      return false
    } else {
      console.log(res.status)
      return false
    }
  } else {
    return false
  }
}

export const logout = async (): Promise<boolean> => {
  const res = await axios
    .get(`${SERVER}/user/logout`, { withCredentials: true })
    .catch((e: AxiosError) => {
      return e.response
    })
  if (res) {
    if (res.status == 200) {
      return true
    } else {
      console.log(res)
      return false
    }
  } else {
    return false
  }
}

import axios, { AxiosError } from 'axios'
import { CreateUser } from '../types/database-models'
import { store } from '../store'
import { SERVER } from '@/constants/env'
import { User } from '../types/database-models'

export const createUser = async function (user: CreateUser) {
  const res = await axios
    .post(`${SERVER}/user`, user)
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
    .get(`${SERVER}/user-cookie-check`, { withCredentials: true })
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

export const loadInitialUser = async function (): Promise<User | null> {
  const res = await axios
    .get(`${SERVER}/user-initial`, { withCredentials: true })
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

export const getUser = async function (
  password: String,
  id?: number,
  username?: String
): Promise<boolean> {
  let dataToSend: any = {}
  dataToSend.password = password
  if (id != null) {
    dataToSend.id = id
  }
  if (username != null) {
    dataToSend.username = username
  }
  const res = await axios
    .get(`${SERVER}/user-login/${dataToSend.id}`, { withCredentials: true })
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

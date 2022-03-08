import axios, { AxiosError } from 'axios'
import { CreateUser } from '../types/databaseModels'
import { store } from '../store'
import { SERVER } from '@/constants/env'

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
    .get(`${SERVER}/user/${dataToSend.id}`)
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

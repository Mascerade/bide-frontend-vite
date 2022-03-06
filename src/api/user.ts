import axios from 'axios'
import { CreateUser } from '../types/databaseModels'
import { store } from '../store'
import { SERVER } from '@/constants/env'

export const createUser = async function (user: CreateUser) {
  try {
    const res = await axios.post(`${SERVER}/user`, user)
    if (res.status == 200) {
      store.commit('changeUser', res.data.user)
      return true
    } else if (res.status == 400) {
      return false
    }
  } catch (error) {
    console.error(error)
  } finally {
  }
}

export const getUser = async function (
  password: String,
  id?: number,
  username?: String
) {
  try {
    let dataToSend: any = {}
    dataToSend.password = password
    if (id != null) {
      dataToSend.id = id
    }
    if (username != null) {
      dataToSend.username = username
    }
    const res = await axios.get(`${SERVER}/user/${dataToSend.id}`)
    if (res.status == 200) {
      store.commit('changeUser', res.data.user)
      return true
    } else if (res.status == 400) {
      return false
    }
  } catch (error) {
    console.log(error)
  } finally {
  }
}

import axios from 'axios'
import { CreateUser, User } from '../types/databaseModels'
import { store } from '../store'

const API_HOST = 'http://localhost:3000'

export const createUser = async function (user: CreateUser) {
  try {
    const res = await axios.post(`${API_HOST}/user`, user)
    if ((res.status = 200)) {
      return res.data
    }
  } finally {
  }
}

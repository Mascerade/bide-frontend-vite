import axios, { AxiosError } from 'axios'
import { CreatePost } from '@/types/database-models'
import { SERVER } from '@/constants/env'

export const createPost = async (groupName: string, post: CreatePost) => {
  const res = await axios
    .post(`${SERVER}/post`, { groupName, ...post }, { withCredentials: true })
    .catch((e: AxiosError) => {
      return e.response
    })
  if (res) {
    if (res.status == 201) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

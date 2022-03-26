import axios, { AxiosError } from 'axios'
import { store } from '../store'
import { SERVER } from '@/constants/env'
import { Group } from '../types/database-models'

export const getGroup = async function (groupId: number): Promise<boolean> {
  const res = await axios
    .get(`${SERVER}/group/${groupId}`)
    .catch((e: AxiosError) => {
      return e.response
    })

  if (res) {
    if (res.status == 200) {
      const group: Group = res.data.group
      store.commit('changeGroupViewing', group)
      return true
    } else if (res.status == 404) {
      return false
    } else {
      return false
    }
  } else {
    return false
  }
}

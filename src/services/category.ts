import { API_CATEGORY } from '@/contants'
import { Category } from '@/types'
import { useAxios } from '@/hooks'

const get = async () =>
  useAxios.get<Category[], Category[]>(API_CATEGORY)

export const CateforyServices = {
  get,
}

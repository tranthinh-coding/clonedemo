import { API_CATEGORY, API_POSTS } from '@/contants'
import { Post } from '@/types'
import { useAxios } from '@/hooks'

const get = async (categoryId: number) =>
  useAxios.get<Post[], Post[]>(`${API_CATEGORY}/${categoryId}/${API_POSTS}`)

export const PostServices = {
  get,
}

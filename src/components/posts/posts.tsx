import { useBem } from '@/hooks'
import { PostItem } from './post-item'

import { useEffect, useMemo, useState } from 'react'
import { PostServices } from '@/services'
import { Category, Post } from '@/types'

import './posts.scss'

type PostsProps = {
  category?: Category
  search: string
}

export const Posts = ({ category, search }: PostsProps) => {
  const bem = useBem('posts')

  const [posts, setPosts] = useState<Post[]>([])

  const getSearch = useMemo(() => {
    return posts.filter((post) => post.title.includes(search))
  }, [posts, search])

  useEffect(() => {
    (async () => {
      if (!category) return
      const res = await PostServices.get(category.id)

      setPosts(res)
    })()
  }, [category])

  return (
    <div className={bem.b()}>
      {getSearch.map(post => <PostItem key={post.id} {...post} />)}
    </div>
  )
}

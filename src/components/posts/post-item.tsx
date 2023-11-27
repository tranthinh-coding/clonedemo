import { useBem } from '@/hooks'
import { Post } from '@/types'

import './post.scss'

export const PostItem = ({ description, title, video }: Post) => {
  const bem = useBem('post')

  const handleOpenVideo = () => {
    if (!video) return
    window.open(video)
  }
  return (
    <div className={bem.b()}>
      <h3 className={bem.e('title')}>{ title }</h3>

      <p className={bem.e('description')}>{ description }</p>

      {video && 
        <button className={bem.e('button')} onClick={handleOpenVideo}>
          Xem video
        </button>}
    </div>
  )
}

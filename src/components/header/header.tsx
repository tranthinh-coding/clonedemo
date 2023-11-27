import Banner from '@/assets/BannerUNETI_5.png'
import { useBem } from '@/hooks'
import { Container } from '../container'

import './header.scss'

export const Header = () => {
  const bem = useBem('header')
  return (
    <>
      <div className={bem.b('wrapper')}>
        <Container>
          <div className={bem.b()}>
            <img src={Banner} className={bem.e('logo')} alt="" />
          </div>
        </Container>
      </div>
    </>
  )
}

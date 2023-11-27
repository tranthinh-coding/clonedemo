import { Footer, Header, Main } from '@/components'
import { Container } from './components/container'

import './styles/index.scss'

function App() {
  return (
    <>
      <div>
        <Header />

        <Container>
          <Main />
        </Container>

        <Footer />
      </div>
    </>
  )
}

export default App

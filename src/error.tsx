import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  // const error = useRouteError()
  // console.error(error)

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <Link
        to={{
          pathname: '/',
        }}
      >
        Back to home
      </Link>
    </div>
  )
}

import Topbar from '../src/NewTopbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      <Topbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

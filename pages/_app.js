import Topbar from '../components/NewTopbar'
import Box from '../components/Box'
import '../styles/globals.css'
import StylesProvider from '../providers/Styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StylesProvider>
        {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
        <Topbar />
        {/* <Box /> */}
        {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}
        <Component {...pageProps} />
      </StylesProvider>
    </>
  )
}

export default MyApp

import Topbar from '../components/Topbar'
import '../styles/globals.css'
import StylesProvider from '../providers/Styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StylesProvider>
        {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
        <Topbar />
        <Component {...pageProps} />
      </StylesProvider>
    </>
  )
}

export default MyApp

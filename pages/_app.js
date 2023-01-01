import '../styles/globals.css'
import StylesProvider from '../providers/Styles'
import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StylesProvider>
      <MainContainer>
        {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
        <Component {...pageProps} />
      </MainContainer>
      </StylesProvider>
    </>
  )
}

export default MyApp

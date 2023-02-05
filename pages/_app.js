import '../styles/globals.css'
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import StylesProvider from '../providers/Styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssVarsProvider>
        <Sheet variant="outlined">
          <StylesProvider>
            <Component {...pageProps} />
          </StylesProvider>
        </Sheet>
      </CssVarsProvider>
    </>
  )
}

export default MyApp

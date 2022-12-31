import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'Giugliani'
const APP_DESCRIPTION = 'Giugliani - Consultoria em Cidadania Italiana';

class DocumentComponent extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          {/* <link rel='manifest' href='/manifest.json' /> */}
          <link rel='shortcut icon' href='/favicon.png' />
          <style>
            {`
            * {
              box-sizing: border-box;
            }
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            @media (prefers-reduced-motion: no-preference) {
              body {
                scroll-behavior: smooth;
              }
            }
            html {
              overflow-x: hidden;
            }
            body {
              height: 100vh;
              margin: 0px;
              position: absolute;
              top: 0;
              width: 100vw;
            }
            @media (prefers-reduced-motion: no-preference) {
              body {
                scroll-behavior: smooth;
              }
            }           
            @media (max-width: 1015px) {
              .hide_mobile {
                display: none;
              }
            }
            @media (min-width: 1016px) {
              .hide_desktop {
                display: none;
              }
            }
            .scroll {
              overflow-y: auto;
            }
            .no-scroll {
              overflow-y: hidden;
            }
            `}
          </style>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossOrigin' />
          <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@600&family=Inter&family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Nunito:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Viga&display=swap" rel="stylesheet"></link>
        </Head>
        <body className='scroll'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentComponent
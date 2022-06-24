import Document, { Html, Head, Main, NextScript } from 'next/document'
import ThemeScriptTag from '../utils/theme-script'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Montserrat:wght@300;400;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ThemeScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

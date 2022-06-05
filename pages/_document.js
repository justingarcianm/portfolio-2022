import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Montserrat:wght@300;400;600;800&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// This function needs to be a String
const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`

function setInitialColorMode() {
  // Check initial color preference
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem('theme')
    const hasPersistedPreference = typeof persistedPreferenceMode === 'string'

    if (hasPersistedPreference) {
      return persistedPreferenceMode
    }

    // Check the current preference
    const preference = window.matchMedia('(prefers-color-scheme: dark)')
    const hasMediaQueryPreference = typeof preference.matches === 'boolean'

    if (hasMediaQueryPreference) {
      return preference.matches ? 'dark' : 'light'
    }

    return 'light'
  }

  const currentColorMode = getInitialColorMode()
  const element = document.documentElement
  element.style.setProperty('--initial-color-mode', currentColorMode)

  // If darkmode apply darkmode
  if (currentColorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
}

export default MyDocument

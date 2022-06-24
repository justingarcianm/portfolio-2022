import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import TagManager from 'react-gtm-module'

import Layout from '../components/layout'
import { lightTheme, darkTheme, GlobalStyles } from '../theme/theme'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function App({ Component, pageProps, router }) {
  const [theme, setTheme] = useState(undefined)
  const [mounted, setMounted] = useState(false)

  const themeToggler = themeColor => setTheme(themeColor)

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-T9DKHG6' })

    const initialColorValue = document.body.style.getPropertyValue(
      '--initial-color-mode'
    )

    setTheme(initialColorValue === 'dark')

    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Layout router={router} themeToggler={themeToggler} theme={theme}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    )
  }
}

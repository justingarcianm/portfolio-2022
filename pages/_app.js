import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles, Global } from '../theme/theme'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function App({ Component, pageProps, router }) {
  const [theme, setTheme] = useState('')

  const themeToggler = themeColor => {
    return setTheme(themeColor)
  }

  useEffect(() => {
    let darkTheme =
      document.documentElement.getAttribute('data-theme') || 'light'
    setTheme(darkTheme)
  }, [])
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Fonts />
      <GlobalStyles />
      <Layout router={router} themeToggler={themeToggler}>
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

import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layout'
import '../styles/global.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence
      exitBeforeEnter
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
        }
      }}
      >
      <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </Layout>
  )
}



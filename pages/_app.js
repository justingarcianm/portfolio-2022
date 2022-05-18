import { AnimatePresence } from 'framer-motion'
import Main from '../components/layouts/main'
import Post from '../components/layouts/article'
import Fonts from '../components/fonts'
import '../styles/global.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const layouts = {
  main: Main,
  post: Post,
};

export default function App({ Component, pageProps, router }) {
  const Layout = layouts[Component.layout] || layouts.main
  return (
    <>
      <Fonts />
      <Layout router={router}>
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
    </>
  )
}

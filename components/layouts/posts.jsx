import Head from 'next/head'
import { Container } from '../../utils/CustomElements'
import Nav from '../nav'
import Footer from '../footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Justin's Portfolio Site" />
        <meta name="author" content="Justin Garcia" />
        <meta name="author" content="codingjustin" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Justin Garcia" />
        <meta name="og:title" content="Justin Garcia" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Justin Garcia</title>
      </Head>
      <Nav path={router.asPath} />
      <Container>{children}</Container>
      <Footer path={router.asPath} />
    </>
  )
}

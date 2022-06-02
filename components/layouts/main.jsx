import Head from 'next/head'
import { Container } from '../../theme/global.css'
import Nav from '../Nav/nav'
import Footer from '../Footer/footer'

export default function Layout({ children, router, themeToggler }) {
  return (
    <>
      <Head>
        <title>CodingJustin</title>
        <meta
          name="description"
          content="Need a problem solver? I am passionate in this field and I have the talent to back it up with experience in headless cms, front end development, and design. I am a natural one man team but I can also thrive in collaborative settings. Learn more about me or just get to the projects."
        />
        <link rel="icon" href="/favicons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Justin's Portfolio Site" />
        <meta name="author" content="Justin Garcia" />
        <meta name="author" content="codingjustin" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <meta property="og:site_name" content="Justin Garcia" />
        <meta name="og:title" content="Justin Garcia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/me.jpg" />
      </Head>
      <Nav path={router.asPath} themeToggler={themeToggler} />
      <Container>{children}</Container>
      <Footer path={router.asPath} />
    </>
  )
}

import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Nav from '../nav'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Justin's Portfolio" />
        <meta name="author" content="Justin Garcia" />
        <meta property="og:site_name" content="Justin Garcia" />
        <meta name="og:title" content="Justin Garcia" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Justin Garcia - Portfolio</title>
      </Head>

      <Nav path={router.asPath} />
      <Container maxW="container.xl" pt="10rem">
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main

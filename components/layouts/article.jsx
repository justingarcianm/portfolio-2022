import Head from 'next/head'
import { PostContainer } from '../../utils/CustomElements'

export default function Layout({ children, title, description, img, }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <link rel="icon" href='/favicons/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Justin's Portfolio Site" />
        <meta name="author" content="Justin Garcia" />
        <meta name="author" content="codingjustin" />
        <link rel="apple-touch-icon" href='/favicons/apple-touch-icon.png' />
        <meta property="og:site_name" content="Justin Garcia" />
        <meta name="og:title" content="Justin Garcia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={img} />
        <title> {`${title} | `} Justin Garcia</title>
      </Head>
      <PostContainer>{children}</PostContainer>
    </>
  )
}

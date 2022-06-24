import { useEffect, useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Section from '../../components/section'
import Social from '../../components/Post/social'
import PostHeader from '../../components/Post/PostHeader'
const PostContent = dynamic(() => import('../../components/Post/PostContent'), {
  suspense: true
})

import { fetchData } from '../../utils/frontFetch'
import { HR } from '../../styles/Index.css'

const PostSingle = ({ post, fullPath }) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    let allCats = post.attributes.catTitle.data
      .map(cat => cat.attributes.catLabel)
      .reduce((a, b) => a.concat(b), [])
    setCategories(allCats)
  }, [post.attributes.catTitle.data])
  return (
    <>
      <Head>
        <meta name="description" content={post.attributes.description} />
        <link rel="icon" href="/favicons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Justin's Portfolio Site" />
        <meta name="author" content="Justin Garcia" />
        <meta name="author" content="codingjustin" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <meta property="og:site_name" content="Justin Garcia" />
        <meta name="og:title" content="Justin Garcia" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            post.attributes.postImage.data.attributes.formats.thumbnail.url
          }
        />
        <title> {`${post.attributes.postTitle} | `} Justin Garcia</title>
      </Head>
      <Section delay={0.2}>
        <PostHeader
          title={post.attributes.postTitle}
          time={post.attributes.createdAt}
          authorName={post.attributes.author.data.attributes.name}
          authorImage={
            post.attributes.author.data.attributes.authorImg.data.attributes
              .formats.thumbnail.url
          }
          categories={categories}
          postImage={post.attributes.postImage.data.attributes.url}
        />
      </Section>
      <Section delay={0.4}>
        <PostContent content={post.attributes.postContent} />
      </Section>

      <HR />

      <Section delay={0.6}>
        <Social link={fullPath} />
      </Section>
      <Section delay={0.8}></Section>
    </>
  )
}

export async function getServerSideProps(context) {
  const fullPath = `${context.req.headers.referer}/${context.query.slug}`

  const post = await fetchData(`posts/${context.query.slug}`)

  return { props: { post, fullPath } }
}

export default PostSingle

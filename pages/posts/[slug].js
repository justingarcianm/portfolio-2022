import Image from 'next/image'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

import ArticleLayout from '../../components/layouts/article'
import Section from '../../components/section'
import SideBar from '../../components/sidebar'
import Nav from '../../components/nav'
import Footer from '../../components/footer'

import { PostHeader, ImageWrapper, MDContainer, AuthorMeta, PostContent } from '../../utils/CustomElements'
import { fetchData } from '../../utils/frontFetch'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostSingle = ({ post }) => {
  const categories = post.attributes.catTitle.data.map((cat,idx) => <span key={idx} className='label'>{cat.attributes.catLabel}</span>)

  return <ArticleLayout 
  title={post.attributes.postTitle} 
  description={post.attributes.postDescription} 
  img={post.attributes.postImage.data.attributes.formats.thumbnail.url} >
      <Section delay={.2}>
        Post Header
      </Section>
      <Section delay={.4}>
        Post Content
      </Section>
      <Section delay={.6} >
        Social
      </Section>
      <Section delay={.8} >
        Related Posts Based off of Category
      </Section>
  </ArticleLayout>
}


export async function getServerSideProps(context) {

  const post = await fetchData(`posts/${context.query.slug}`)

  return { props: { post } }
}

export default PostSingle

import Image from 'next/image'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Social from '../../components/social'
import Nav from '../../components/nav'
import Footer from '../../components/footer'

import { PostHeader, ImageWrapper, MDContainer, AuthorMeta } from '../../utils/CustomElements'
import { fetchData } from '../../utils/frontFetch'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostSingle = ({ post }) => {
  const categories = post.attributes.catTitle.data.map(cat => `${cat.attributes.catLabel}`)
  // console.log(post)

  return (
   <Layout 
   title={post.attributes.postTitle} 
   description={post.attributes.postDescription} 
   img={post.attributes.postImage.data.attributes.formats.thumbnail.url}
   >
     <Nav/>
     <Section delay={.2}>
     <PostHeader>
     <div>
       <p className='categories' >{categories}</p>
      <h2>{post.attributes.postTitle}</h2>
      <p>{post.attributes.postDescription}</p>
      <AuthorMeta>
        <Image src={post.attributes.author.data.attributes.authorImg.data.attributes.formats.thumbnail.url} alt={post.attributes.author.data.attributes.name} width={50} height={50} />
      <span>
      <h3>By {post.attributes.author.data.attributes.name}</h3>
      <span>Published <Moment element="span" format='ll' date={post.attributes.updatedAt} /></span>
      </span>
      </AuthorMeta>
      </div>
      <ImageWrapper>
     <Image src={post.attributes.postImage.data.attributes.url} alt={post.attributes.postTitle} layout='fill' objectFit='cover' objectPosition='center' priority />
     </ImageWrapper>
     </PostHeader>
     </Section>
        <MDContainer>
        <ReactMarkdown 
        components={{
          code: ({node, children, className, ...props}) => { 
            const match = /language-(\w+)/.exec(className || '')
          return (<SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          language={match[1]}
          style={nightOwl}
          showLineNumbers
          PreTag="div"
          {...props}
        />)}
        }}
        children={post.attributes.postContent} 
        />
        </MDContainer>

<Section delay={.4}>
  <Social link={''} />
</Section>
<Footer/>
   </Layout>
  )
}

PostSingle.layout='post'

export async function getServerSideProps(context) {

  const post = await fetchData(`posts/${context.query.slug}`)

  return { props: { post } }
}

export default PostSingle

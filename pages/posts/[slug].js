import Image from 'next/image'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Paragraph } from '../../utils/CustomElements'
import { fetchData } from '../../utils/frontFetch'

const PostSingle = ({ post }) => {

  return (
   <Layout 
   title={post.attributes.postTitle} 
   description={post.attributes.postDescription} 
   img={post.attributes.postImage.data.attributes.formats.thumbnail.url}
   >
     <Section delay={.2}>
     <Image src={post.attributes.postImage.data.attributes.url} alt={post.attributes.postTitle} layout='fill' />
     </Section>
   </Layout>
  )
}

export async function getServerSideProps(context) {

  const post = await fetchData(`posts/${context.query.slug}`)

  return { props: { post } }
}

export default PostSingle

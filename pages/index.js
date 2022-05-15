import Section from '../components/section'
import Card from '../components/card'
import Contact from '../components/contact'
import {
  Paragraph,
  SectionTitle,
  Button,
  IndexHeading,
  IndexSubHeading
} from '../utils/CustomElements'
import Link from 'next/link'
import { fetchData } from '../utils/frontFetch'


const Home = ({ worksData, postsData }) => {
  return (
    <>
      <Section delay={0.2} cols={2}>
        <div>
          <IndexHeading>Hi, my name is Justin</IndexHeading>
          <IndexSubHeading>Web Developer</IndexSubHeading>
        </div>
        <div>
          <Paragraph>
            Need a problem solver? I am passionate in this field and I have the
            talent to back it up with experience in headless cms, front end
            development, and design. I am a natural one man team but I can also
            thrive in collaborative settings. Learn more about me or just get to
            the projects.
          </Paragraph>
        </div>
      </Section>

      <Section delay={0.4}>
        <SectionTitle>My Work</SectionTitle>
        <Section cols={3}>
          { worksData && worksData.map( work => <Card
          key={work.id}
            cardTitle={work.attributes.workTitle}
            cardSlug={work.attributes.workSlug}
            cardImg={work.attributes.workImage.data.attributes.formats.thumbnail.url}
            cardPath={'work'}
          /> ) }
        </Section>
        <Button>
          <Link href="/works"> View All </Link>
        </Button>
      </Section>
      <Section delay={0.6}>
        <SectionTitle>Latest Posts</SectionTitle>
        <Section cols={3}>
        { postsData && postsData.map( post => {
          return <Card
          key={post.id}
            cardTitle={post.attributes.postTitle}
            cardSlug={post.attributes.postSlug}
            cardImg={post.attributes.postImage.data.attributes.formats.thumbnail.url}
            cardPath={'posts'}
          />
        } ) }
        </Section>
        <Button>
          <Link href="/posts"> View All </Link>
        </Button>
      </Section>

      <Contact delay={0.6} />
    </>
  )
}

export async function getServerSideProps() {
  const worksData = await fetchData('works', 'pagination[limit]=3')
  const postsData = await fetchData('posts', 'pagination[limit]=3')

  return { props: { worksData, postsData } }
}

export default Home

import Section from '../components/section'
import PageLink from '../components/pageLink'
import Card from '../components/Card/card'
import Contact from '../components/Contact/contact'

import { fetchData } from '../utils/frontFetch'
import { HomeTitle } from '../styles/Index.css'

const Home = ({ worksData, postsData }) => {
  return (
    <>
      <Section delay={0.2} cols={2}>
        <HomeTitle>
          Hi, my name is Justin
          <span>Web Developer</span>
        </HomeTitle>
        <p>
          Need a problem solver? I am passionate in this field and I have the
          talent to back it up with experience in headless cms, front end
          development, and design. I am a natural one man team but I can also
          thrive in collaborative settings. Learn more about me or just get to
          the projects.
        </p>
      </Section>

      <Section delay={0.4}>
        <h2>My Work</h2>
        <Section cols={3}>
          {worksData &&
            worksData.map(work => (
              <Card
                key={work.id}
                cardTitle={work.attributes.workTitle}
                cardSlug={work.attributes.workSlug}
                cardImg={
                  work.attributes.workImage.data.attributes.formats.thumbnail
                    .url
                }
                cardPath={'work'}
              />
            ))}
        </Section>
        <PageLink href="/works"> View All </PageLink>
      </Section>
      <Section delay={0.6}>
        <h2>Latest Posts</h2>
        <Section cols={3}>
          {postsData &&
            postsData.map(post => {
              return (
                <Card
                  key={post.id}
                  cardTitle={post.attributes.postTitle}
                  cardSlug={post.attributes.postSlug}
                  cardImg={
                    post.attributes.postImage.data.attributes.formats.thumbnail
                      .url
                  }
                  cardPath={'posts'}
                />
              )
            })}
        </Section>
        <PageLink href="/posts"> View All </PageLink>
      </Section>

      <Contact delay={0.6} />
    </>
  )
}

export async function getServerSideProps() {
  const worksData = await fetchData('works', '?pagination[limit]=3&populate=*')
  const postsData = await fetchData('posts', '?pagination[limit]=3&populate=*')

  return { props: { worksData, postsData } }
}

export default Home

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

const Home = () => {
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
          <Card
            cardTitle={'title'}
            cardSlug={'#'}
            cardImg={''}
            cardPath={'work'}
          />
          <Card
            cardTitle={'title'}
            cardSlug={'#'}
            cardImg={''}
            cardPath={'work'}
          />
          <Card
            cardTitle={'title'}
            cardSlug={'#'}
            cardImg={''}
            cardPath={'work'}
          />
        </Section>
        <Button>
          <Link href="/works"> View All </Link>
        </Button>
      </Section>
      <Section delay={0.6}>
        <SectionTitle>Latest Posts</SectionTitle>
        <Section cols={3}>
          <Card
            cardTitle={'title'}
            cardSlug={'#'}
            cardImg={''}
            cardPath={'work'}
          />
          <Card
            cardTitle={'title'}
            cardSlug={'#'}
            cardImg={''}
            cardPath={'work'}
          />
          <Card
            cardTitle={'title'}
            cardSlug={'#'}
            cardImg={''}
            cardPath={'work'}
          />
        </Section>
        <Button>
          <Link href="/posts"> View All </Link>
        </Button>
      </Section>

      <Contact delay={0.6} />
    </>
  )
}

export default Home

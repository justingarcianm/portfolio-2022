import Section from '../components/section'
import Card from '../components/card'
import Contact from '../components/contact'
import ButtonLink from '../components/buttonLink'
import { Paragraph, SectionTitle } from '../utils/CustomElements'

const Home = () => {
  return <>
  <Section delay={.2} cols={2}>
    <div>
      <h2>Hi, my name is Justin</h2>
      <h3>Web Developer</h3>
    </div>
    <div>
      <Paragraph>
      Need a problem solver? I am passionate in this field and I have the talent to back it up with experience in headless cms, front end development, and design. I am a natural one man team but I can also thrive in collaborative settings. Learn more about me or just get to the projects.
      </Paragraph>
    </div>
  </Section>

  <Section delay={.4}>
    <SectionTitle>My Work</SectionTitle>
    <Section cols={3}>
      <Card cardTitle={'title'} cardSlug={'#'} cardImg={''} cardPath={'work'} />
      <Card cardTitle={'title'} cardSlug={'#'} cardImg={''} cardPath={'work'} />
      <Card cardTitle={'title'} cardSlug={'#'} cardImg={''} cardPath={'work'} />
    </Section>
    <ButtonLink/>
  </Section>
  <Section delay={.6}>
    <SectionTitle>Latest Posts</SectionTitle>
    <Section cols={3}>
      <Card cardTitle={'title'} cardSlug={'#'} cardImg={''} cardPath={'work'} />
      <Card cardTitle={'title'} cardSlug={'#'} cardImg={''} cardPath={'work'} />
      <Card cardTitle={'title'} cardSlug={'#'} cardImg={''} cardPath={'work'} />
    </Section>
  </Section>

  <Contact delay={.6}/>

  </>
}

export default Home
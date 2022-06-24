import Image from 'next/image'
import Contact from '../components/Contact/index'
import me from '../public/images/me.jpg'
import Section from '../components/section'
import { UnderLine } from '../styles/Index.css'
import { AboutSection } from '../styles/Index.css'
// import { GiJumpAcross, GiRun, GiWalk } from 'react-icons/gi'

const About = () => {
  return (
    <>
      <AboutSection delay={0.2}>
        <div className="about-header">
          <div>
            <h1>About Justin</h1>
            <UnderLine
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="about-content">
            <p>
              I started practicing Web Development in 2018 and I haven&apos;t
              stopped since. I appreciate how much I&apos;ve been rewarded for
              my stubbornness. From tackling the basics to deploying fullstack
              apps, learned to appreciate my tenacity and love for problem
              solving. I started off a lone wolf but quickly grew to love team
              work and mentoring when I joined a bootcamp in 2019. I live by the
              adage,
            </p>
            <blockquote style={{ margin: '1rem 0' }}>
              &ldquo;<strong>Luck</strong> is what happens when preparation
              meets opportunity.&ldquo; &#8211; Seneca
            </blockquote>
            <p>
              I am a textbook nerd who plays video games and reads comics in my
              spare time when I need a break from coding. I&apos;m currently
              living in Albuquerque, NM where the tech field is still young but
              filled with opportunity. I am very lucky to be in the position I
              am to have gone from coding in my spare time to it being my
              career. Thanks for reading! If you think I would be a good fit for
              your team, or just want to get to know me, send me a message.
            </p>
          </div>
        </div>
        <Image
          src={me}
          alt="Picture of Justin Garcia"
          style={{
            borderRadius: '50%',
            boxShadow: 'var(--box-shadow)'
          }}
          layout="intrinsic"
          priority
        />
      </AboutSection>
      {/* <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <span>
              <GiJumpAcross />
            </span>
            <h3>Strongest</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Bootstrap</p>
            <p>Headless CMS/API's</p>
          </div>
          <div className="skill">
            <span>
              <GiRun />
            </span>
            <h3>Proficient</h3>
            <p>Wordpress</p>
            <p>sass</p>
            <p>DNS management/hosting</p>
            <p>SEO optimization</p>
            <p>PHP</p>
          </div>
          <div className="skill">
            <span>
              <GiWalk />
            </span>
            <h3>Learning</h3>
            <p>Node JS</p>
            <p>Next JS</p>
            <p>Three JS</p>
            <p>MongoDB</p>
          </div>
        </div>
      </section> */}
      <Section delay={0.4}>
        <Contact />
      </Section>
    </>
  )
}

export default About

import { motion } from 'framer-motion'
import { pageVariant, pageTransition } from '../lib/variants'
import Contact from '../components/Contact'
import { GiJumpAcross, GiRun, GiWalk } from 'react-icons/gi'

const About = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <section className="about-header">
        <div className="about-title">
          <h2>About Justin</h2>
          <div className="about-copy">
            <p>
              I started practicing Web Development in 2018 and I haven&apos;t
              stopped since. I appreciate how much I&apos;ve been rewarded for
              my stubbornness. From tackling the basics to deploying fullstack
              apps, learned to appreciate my tenacity and love for problem
              solving. I started off a lone wolf but quickly grew to love team
              work and mentoring when I joined a bootcamp in 2019. I live by the
              adage,
            </p>
            <p>
              &apos;<strong>Luck</strong> is what happens when preparation meets
              opportunity.&apos; -Seneca
            </p>
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
        <div className="about-image">
          <img src="https://bit.ly/dan-abramov" />
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <span>
              <GiJumpAcross />
            </span>
            <h3>Strongest</h3>
          </div>
          <div className="skill">
            <span>
              <GiRun />
            </span>
            <h3>Proficient</h3>
          </div>
          <div className="skill">
            <span>
              <GiWalk />
            </span>
            <h3>Learning</h3>
          </div>
        </div>
      </section>
      <section className="contact">
        <Contact />
      </section>
    </motion.div>
  )
}

export default About

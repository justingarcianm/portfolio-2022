import Form from './form'
import { ContactSection } from '../utils/CustomElements'
import { pageVariant } from '../utils/motionVars'
import { Paragraph, ContactSubHeading, BGImageWrapper } from '../utils/CustomElements'
import Image from 'next/image'
import SpaceImg from '../public/images/undraw_launching.svg'

const Contact = ({ delay }) => {
  return (
    <ContactSection
      className="contact-container"
      initial="out"
      animate="in"
      variants={pageVariant}
      transition={{ delay: delay || 0, duration: 1 }}
    >
      <div style={{position:'relative'}} >
        <h2 style={{fontSize:'2rem'}}>Let's Talk</h2>
        <Paragraph>
          Have a project you think I can help with? Wanna talk about something
          nerdy? Or just want to say hi. Whatever it may be, shoot me a message
          and I'll get back to you!
        </Paragraph> 
      </div>
      <div className="contact-form">
        <Form />
      </div>
    </ContactSection>
  )
}

export default Contact

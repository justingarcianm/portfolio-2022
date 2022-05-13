import ContactForm from './contactForm'
import { ContactSection } from '../utils/CustomElements'
import { pageVariant } from '../utils/motionVars'
import { Paragraph } from '../utils/CustomElements'

const Contact = ({ delay }) => {
  return (
    <ContactSection
      className="contact-container"
      initial="out"
      animate="in"
      variants={pageVariant}
      transition={{ delay: delay || 0, duration: 1 }}
    >
      <div className="contact-copy">
        <h2>Let's Talk</h2>
        <Paragraph>
          Have a project you think I can help with? Wanna talk about something
          nerdy? Or just want to say hi. Whatever it may be, shoot me a message
          and I'll get back to you!
        </Paragraph>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </ContactSection>
  )
}

export default Contact

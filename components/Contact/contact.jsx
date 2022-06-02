import Form from './form'
import { pageVariant } from '../../utils/motionVars'
import { ContactSection } from './Contact.css'

const Contact = ({ delay }) => {
  return (
    <ContactSection
      initial="out"
      animate="in"
      variants={pageVariant}
      transition={{ delay: delay || 0, duration: 1 }}
    >
      <div style={{ position: 'relative' }}>
        <h2 style={{ textAlign: 'left' }}>Let&apos;s Talk</h2>
        <p>
          Have a project you think I can help with? Wanna talk about something
          nerdy? Or just want to say hi. Whatever it may be, shoot me a message
          and I&apos;ll get back to you!
        </p>
      </div>
      <Form />
    </ContactSection>
  )
}

export default Contact

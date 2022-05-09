import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-copy">
        <h2>Let's Talk</h2>
        <p>
          Have a project you think I can help with? Wanna talk about something
          nerdy? Or just want to say hi. Whatever it may be, shoot me a message
          and I'll get back to you!
        </p>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact

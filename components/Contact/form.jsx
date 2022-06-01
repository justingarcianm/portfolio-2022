import { useState } from 'react'
import { Input } from './Contact.css'
import { sendData } from '../../utils/frontFetch'
import { LinkButton } from '../../theme/global.css'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const API_URL =
    process.env.REACT_APP_API_PROD || process.env.REACT_APP_API_LOCAL
  const [btnText, setBtnText] = useState('Submit')
  const [disabled, setDisabled] = useState(false)
  const [status, setStatus] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    setDisabled(true)
    setBtnText('Sending...')
    const { name, email, message } = e.target.elements
    let content = {
      data: {
        fullName: name.value,
        formEmail: email.value,
        emailBody: message.value
      }
    }
    try {
      const response = await sendData(content)
      setBtnText('Sent!!')
      setStatus("Thanks for reaching out. I'll get back to you soon!")
      return response
    } catch (err) {
      console.log(err)
      setBtnText('Oops...')
      setStatus(
        `Looks like something happened and I didn't get your message. If you are continuing to see this, send your inquires to: justingarcianm@gmail.com`
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ borderRadius: '--border-radius', padding: '2rem' }}
    >
        <Input
          type="text"
          id="name"
          required
          placeholder="Name"
        />
        <Input
          type="email"
          id="email"
          required
          placeholder="Email"
        />

        <Input
          as="textarea"
          id="message"
          rows="5"
          required
          placeholder="Your Message"
        />

      <LinkButton
        type="submit"
        as={motion.motion}
        initial={{boxShadow:'var(--box-shadow)'}}
        whileHover={{boxShadow:'var(--box-shadow-hover)'}}
        transition={{duration:.3, ease:'easeInOut' }}
        style={{margin:0}}
        disabled={disabled}
      >
        {btnText}
      </LinkButton>
      <p>{status}</p>
    </form>
  )
}

export default ContactForm
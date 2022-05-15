import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input, Button } from '../utils/CustomElements'
import { sendData } from '../utils/frontFetch'

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
      <div style={{ marginBottom: '1rem' }}>
        <Input
          type="text"
          id="name"
          required
          placeholder="Name"
          whileFocus={{ borderColor: 'var(--accent-color)' }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Input
          type="email"
          id="email"
          required
          placeholder="Email"
          whileFocus={{ borderColor: 'var(--accent-color)' }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Input
          as="textarea"
          id="message"
          rows="5"
          required
          placeholder="Your Message"
          whileFocus={{ borderColor: 'var(--accent-color)' }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <Button
        type="submit"
        as={motion.button}
        disabled={disabled}
        whileHover={{ scaleY: 1.1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {btnText}
      </Button>
      <p>{status}</p>
    </form>
  )
}

export default ContactForm

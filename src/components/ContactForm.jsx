import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
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
        name: name.value,
        email: email.value,
        messageBody: message.value
      }
    }
    try {
      let response = await fetch('http://localhost:1337/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(content)
      })
      setBtnText('Sent!!')
      setStatus("Thanks for reaching out. I'll get back to you soon!")
      return response
    } catch (err) {
      console.log(err)
      setBtnText('Oops...')
      setStatus(
        `Looks like something happened and I didn't get your message. If you are continuing to see this, try this: justingarcianm@gmail.com`
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <motion.input
          type="text"
          id="name"
          required
          placeholder="Name"
          whileFocus={{ borderColor: 'var(--accent-color)' }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="input-group">
        <motion.input
          type="email"
          id="email"
          required
          placeholder="Email"
          whileFocus={{ borderColor: 'var(--accent-color)' }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="input-group">
        <motion.textarea
          id="message"
          rows="5"
          required
          placeholder="Your Message"
          whileFocus={{ borderColor: 'var(--accent-color)' }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.button
        type="submit"
        className="link-button"
        disabled={disabled}
        whileHover={{ scaleY: 1.1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {btnText}
      </motion.button>
      <p>{status}</p>
    </form>
  )
}

export default ContactForm

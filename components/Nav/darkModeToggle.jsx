import { FaMoon, FaSun } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ToggleBtn } from './Nav.css'

const DarkModeToggle = ({ themeToggler }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    let color = darkTheme ? 'dark' : 'light'
    themeToggler(color)
    return setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark')
      window.localStorage.setItem('theme', 'dark')
      themeToggler('dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      window.localStorage.setItem('theme', 'light')
      themeToggler('light')
    }
  }, [darkTheme, themeToggler])

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    )
    setDarkTheme(initialColorValue === 'dark')
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <ToggleBtn
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="toggle-button"
        onTap={() => toggleTheme()}
        key={darkTheme ? FaSun : FaMoon}
      >
        {darkTheme ? <FaSun /> : <FaMoon />}
      </ToggleBtn>
    </AnimatePresence>
  )
}

export default DarkModeToggle

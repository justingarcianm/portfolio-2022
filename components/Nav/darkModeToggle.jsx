import { FaMoon, FaSun } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ToggleBtn } from './Nav.css'

const DarkModeToggle = ({ themeToggler, theme }) => {
  const [darkTheme, setDarkTheme] = useState(theme)

  const toggleTheme = () => {
    let themeSetting = !darkTheme

    if (themeSetting) {
      document.body.setAttribute('data-theme', 'dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.body.removeAttribute('data-theme')
      window.localStorage.setItem('theme', 'light')
    }

    themeToggler(themeSetting)
    setDarkTheme(themeSetting)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <ToggleBtn
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onTap={() => toggleTheme()}
        key={darkTheme ? FaSun : FaMoon}
      >
        {darkTheme ? <FaSun /> : <FaMoon />}
      </ToggleBtn>
    </AnimatePresence>
  )
}

export default DarkModeToggle

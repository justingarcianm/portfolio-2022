import { FaMoon, FaSun } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ToggleBtn } from '../utils/CustomElements'

const DarkModeToggle = () => {

  const [darkTheme,setDarkTheme] = useState(false)

  const toggleTheme = () => {
    return setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    if( darkTheme) {
      document.documentElement.setAttribute('data-theme','dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      window.localStorage.setItem('theme', 'light')
    }
     
  },[darkTheme])

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue('--initial-color-mode')
    setDarkTheme(initialColorValue === 'dark')
  },[])

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

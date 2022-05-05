import { FaMoon, FaSun } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false)
  const storedTheme = localStorage.getItem('data-theme')
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && prefersDark)

  useEffect(() => {
    defaultDark && setToDark()
  }, [])

  const setToDark = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    setDark(prev => !prev)
  }
  const setToLight = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
    setDark(prev => !prev)
  }

  const toggleTheme = () => (dark ? setToLight() : setToDark())

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="toggle-button"
        onTap={() => toggleTheme()}
        key={dark ? FaSun : FaMoon}
      >
        {dark ? <FaSun /> : <FaMoon />}
      </motion.div>
    </AnimatePresence>
  )
}

export default DarkModeToggle

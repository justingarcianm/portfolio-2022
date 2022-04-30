import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        color: mode('gray.800', 'gray.50')(props),
        bg: mode('gray.50', 'gray.800')(props)
      }
    })
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Inter, sans-serif'
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  components: {
    Heading: {
      variants: {
        accent: props => ({
          color: mode('green.300', 'green.200')(props)
        })
      }
    },
    Button: {
      variants: {
        accent: props => ({
          bg: mode('green.300', 'green.200')(props),
          color: 'gray.800',
        }),
        toggle: props => ({
          bg: mode('purple', 'orange')(props),
          color: 'gray.50'
        })
      },
      defaultProps: {
        variant: 'accent'
      }
    }
  }
})

export default theme

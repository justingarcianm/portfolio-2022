import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ToggleLightMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
    )
  }

  export default ToggleLightMode
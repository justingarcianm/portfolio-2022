import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleLightMode from '../components/lightToggle'

const Nav = props => {
  const { path } = props
  return (
    <Box
      as="nav"
      w="100%"
      bg={useColorModeValue('#f7fafc70', '#1a202c70')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
      m="5"
      borderRadius="sm"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" fontWeight='200'>
            Justin Garcia
          </Heading>
        </Flex>
        <ToggleLightMode/>
      </Container>
    </Box>
  )
}

export default Nav

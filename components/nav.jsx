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
import { FaGithub } from 'react-icons/fa'

const Nav = props => {
  const { path } = props
  return (
    <Box
      as="nav"
      bg={useColorModeValue('#f7fafc70', '#1a202c70')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      m='1rem'
      maxW="container.xl"
      {...props}
      borderRadius="sm"
      width='100%'
      position='fixed'
      left='50%'
      transform='translate(-50%,0)'
    >
      <Container
        display="flex"
        maxW="container.xl"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        p='1rem'
      >
        <Flex>
          <Heading as="h1" size="lg" fontWeight='200'>
            <NextLink href='/' >Justin Garcia</NextLink>
          </Heading>
        </Flex>
        <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        >
          <NextLink href='/about' path={path}>About</NextLink>
          <NextLink href='/work' path={path}>My Work</NextLink>
          <NextLink href='/posts' path={path}>Posts</NextLink>

        </Stack>
        <Flex>
        <ToggleLightMode/>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav

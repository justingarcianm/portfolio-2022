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

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        color={active ? useColorModeValue('green.300', 'green.200') : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Nav = props => {
  const { path } = props
  return (
    <Box
      as="nav"
      bg={useColorModeValue('#f7fafc70', '#1a202c70')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      m="1rem"
      maxW="container.xl"
      {...props}
      borderRadius="sm"
      width="100%"
      position="fixed"
      left="50%"
      transform="translate(-50%,0)"
    >
      <Container
        display="flex"
        maxW="container.xl"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        p="1rem"
      >
        <Flex>
          <Heading as="h1" size="lg" fontWeight="200">
            <NextLink href="/">Justin Garcia</NextLink>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent='flex-end'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          gap={5}
          mr={5}
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/work" path={path}>
            My Work
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem 
          href="https://github.com/justingarcianm/portfolio-2022" 
          target="_blank" 
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          >
            <FaGithub/>
            View Source
          </LinkItem>
        </Stack>
        <Box
        flex={1}
        alignItems='right'
        >
          <ToggleLightMode />
          <Box 
          ml={2}
          display={{ base: 'inline-block', md: 'none' }}
          >
            <Menu isLazy id='navbar-menu'>
              <MenuButton
              as={IconButton}
              icon={<HamburgerIcon/>}
              variant="outline"
              aria-label="Options"
              />
              <MenuList>
              <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/work" passHref>
                  <MenuItem as={Link}>My Work</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/justingarcianm/portfolio-2022"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Nav

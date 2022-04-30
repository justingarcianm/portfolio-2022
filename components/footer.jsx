import Link from 'next/link'
import { Box, IconButton, Container, Center, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons'

const Footer = () => {
  return (
    <Box as="footer" py={10}>
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>&#169; 2022 Justin Garcia. All Rights Reserved.</Text>
       <Box>
       <Flex gap={5}>
          <Link href='/about'>About</Link>
          <Link href='/work'>My Work</Link>
          <Link href='/posts'>Posts</Link>
        </Flex>
    <Center>
    <Flex>
        {/* <IconButton icon={} href='https://github.com/justingarcianm' bg='transparent' color={useColorModeValue('gray.800', 'gray.50')}></IconButton> */}
        </Flex>
    </Center>
       </Box>
      </Container>
    </Box>
  )
}

export default Footer

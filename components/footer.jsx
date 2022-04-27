import Link from 'next/link'
import { Box, IconButton, Container, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
  return <Box as='footer' py={10}>
    <Container 
    maxW='container.xl' 
    display='flex' 
    justifyContent='space-between' 
    alignItems='center'
    >
      <Flex>&#169; 2022 Justin Garcia. All Rights Reserved.</Flex>
      <Flex>links</Flex>
    </Container>
  </Box>
}

export default Footer

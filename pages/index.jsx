import { Box, Heading, Text, Flex, Button, SimpleGrid } from '@chakra-ui/react'
import CardComponent from '../components/Card'
import Contact from '../components/Contact'
import Link from 'next/link'

const IndexPage = (props) => {
  console.log(props)
  return (
    <Box>
      <SimpleGrid columns={2} spacing={20} h='50vh' >
        <Flex display="flex" flexDirection="column" alignSelf='center'>
          <Heading as="h2" fontSize="90" lineHeight="none">
            Hi, my name is Justin
          </Heading>
          <Heading variant="accent" fontSize="50" fontWeight="700">
            Web Developer
          </Heading>
        </Flex>
        <Flex>
          <Text
            align="justify"
            lineHeight="tall"
            fontSize="20"
            alignSelf="center"
          >
            Need a problem solver? I am passionate in this field and I have the
            talent to back it up with experience in headless cms, front end
            development, and design. I am a natural one man team but I can also
            thrive in collaborative settings. Learn more about me or just get to
            the projects.
          </Text>
        </Flex>
      </SimpleGrid>
      <Box align="center" pt="3rem">
        <Heading py={5}> My Work </Heading>
        <CardComponent />
        <Link href="/work">
          <Button my={5}>All Work</Button>
        </Link>
      </Box>
      <Box align="center" pt="2rem">
        <Heading py={5}> Recent Posts </Heading>
        <SimpleGrid columns={3} spacing={1} alignItems="center">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </SimpleGrid>
        <Link href="/posts">
          <Button my={5}>All Posts</Button>
        </Link>
      </Box>
      <Contact />
    </Box>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://randomuser.me/api/')
//   const projects = await res.json()
//   return { props: { projects } }
// }
export default IndexPage

import { Box, Heading, Text, Flex, Button, SimpleGrid } from '@chakra-ui/react'
import CardComponent from '../components/Card'
import ContactForm from '../components/ContactForm'
import Link from 'next/link'
const IndexPage = () => {
  return (
    <Box>
      <SimpleGrid columns={2} spacing={20}>
          <Flex display='flex' flexDirection='column'>
            <Heading as='h2' fontSize='90' lineHeight='none'>Hi, my name is Justin</Heading>
            <Heading variant='accent' fontSize='50' fontWeight='700'>Web Developer</Heading>
          </Flex>
          <Flex>
            <Text align='justify' lineHeight='tall' fontSize="20" alignSelf='center'>
            Need a problem solver? I am passionate in this field and I have the talent to back it up with experience in headless cms, front end development, and design. I am a natural one man team but I can also thrive in collaborative settings. Learn more about me or just get to the projects.
            </Text>
          </Flex>
      </SimpleGrid>
      <Box align='center' pt='3rem'>
        <Heading py={5} > My Work </Heading>
        <CardComponent/>
        <Link href='/work'>
          <Button my={5} >All Work</Button>
        </Link>
      </Box>
      <Box align='center' pt='2rem'>
        <Heading py={5}> Recent Posts </Heading>
        <SimpleGrid columns={3} spacing={1} alignItems='center'>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        </SimpleGrid>
        <Link href='/posts'>
          <Button my={5} >All Posts</Button>
        </Link>
      </Box>
      <SimpleGrid columns={2} spacing={10} py='3rem'>
        <Box alignSelf='center'>
          <Heading as='h3'>
            Contact Me
          </Heading>
          <Text align='justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam neque cum numquam itaque accusantium omnis eveniet quia illo, a iste excepturi? Esse repellat atque et nesciunt animi quia adipisci dolorem.
          </Text>
        </Box>
        <Box>
          <ContactForm/>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default IndexPage

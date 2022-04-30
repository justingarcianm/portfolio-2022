import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import ContactForm from './ContactForm'

const Contact = () => {
    return <SimpleGrid columns={2} spacing={10} py="3rem">
    <Box alignSelf="center">
      <Heading as="h3">Contact Me</Heading>
      <Text align="justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        neque cum numquam itaque accusantium omnis eveniet quia illo, a iste
        excepturi? Esse repellat atque et nesciunt animi quia adipisci
        dolorem.
      </Text>
    </Box>
    <Box>
      <ContactForm />
    </Box>
  </SimpleGrid>
}

export default Contact
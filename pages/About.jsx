import { Box, Heading, Text, SimpleGrid, Image, useColorModeValue, Center, Flex, Icon } from '@chakra-ui/react'
import { GiRun, GiWalk, GiJumpAcross } from 'react-icons/gi'
import Contact from '../components/Contact'

const About = () => {
  return <Box>
    <SimpleGrid columns={2}>
      <Box>
        <Heading as="h1" fontSize={80} display='inline'> About <Heading display='inline' fontSize={80} color={useColorModeValue('green.300', 'green.200')}>Justin</Heading> </Heading>
        <Box bg={useColorModeValue('green.300', 'green.200')} h={1} w='30%' mb={5} ></Box>
        <Text>
          I started practicing Web Development in 2018 and I haven't stopped since. I appreciate how much I've been rewarded for my stubbornness. From tackling the basics to deploying fullstack apps, learned to appreciate my tenacity and love for problem solving. I started off a lone wolf but quickly grew to love team work and mentoring when I joined a bootcamp in 2019. I live by the adage,

<Box py={5} >“<strong>Luck</strong> is what happens when preparation meets opportunity.” -Seneca</Box>
I am a textbook nerd who plays video games and reads comics in my spare time when I need a break from coding. I'm currently living in Albuquerque, NM where the tech field is still young but filled with opportunity. I am very <strong>lucky</strong> to be in the position I am to have gone from coding in my spare time to it being my career. Thanks for reading! If you think I would be a good fit for your team, or just want to get to know me, send me a message.
</Text>
      </Box>
      <Box display='flex' justifyContent='center' >
        <Image rounded='100%' src='https://bit.ly/dan-abramov' />
      </Box>
    </SimpleGrid>

    <Box py={20} >
      <Heading as='h2' align='center'>Skills</Heading>
        <SimpleGrid columns={3} pt={10} alignItems='flex-start'>
            <Center flexDirection='column'>
              <Icon as={GiJumpAcross} fontSize={40} bg={useColorModeValue('green.300', 'green.200')} p={5} rounded={50} h={20} w={20} mb={1}/>
                <Heading as='h4'>Strongest</Heading>
                <Box>
                <Text>HTML</Text>
                <Text>CSS</Text>
                <Text>JavaScript</Text>
                <Text>React</Text>
                </Box>
              </Center>         
            <Center flexDirection='column'>
            <Icon as={GiRun} fontSize={40} bg={useColorModeValue('green.300', 'green.200')} p={5} rounded={50} h={20} w={20} mb={1}/>
                <Heading as='h4'>Proficient</Heading>
                <Box>
                <Text>CMS</Text>
                <Text>PHP</Text>
                <Text>SEO</Text>
                <Text>DNS</Text>
                <Text>GIT</Text>
                </Box>
              </Center>         
            <Center flexDirection='column'>
            <Icon as={GiWalk} fontSize={40} bg={useColorModeValue('green.300', 'green.200')} p={5} rounded={50} h={20} w={20} mb={1}/>
                <Heading as='h4'>Learning</Heading>
                <Box>
                <Text>Node</Text>
                <Text>mongoDB</Text>
                </Box>
              </Center>         
        </SimpleGrid>

<Contact/>

    </Box>

  </Box>
}

export default About

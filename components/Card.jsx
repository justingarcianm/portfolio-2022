import { Box, Center, Heading, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

const ContentImage = styled(Box)`
background-position:center;
background-size:cover;
height:200px;
width:400px;
border-radius:15px;
padding:1rem;
position: relative;
`
const OverlayLink = styled(Link)`
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
    text-wrap:wrap;
    transition: 500ms ease;
    &:hover {
        background-color: #1a202c70;
        text-decoration: none;
    }
`
// props ( featuredImg, postURL, postTitle )
const CardComponent = () => {

    return <Center>
        <ContentImage backgroundImage='https://bit.ly/dan-abramov'>
            <OverlayLink href=''>
            <Heading as='h4' fontSize={20} color='gray.50'>This is a title that is longer than I would write it</Heading>
            </OverlayLink>
        </ContentImage>
    </Center>
}

export default CardComponent
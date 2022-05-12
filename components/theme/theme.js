import styled from 'styled-components';

export const Paragraph = styled.p`
font-size:1.1rem;
line-height:1.5rem;
text-align:justify;
`

export const Button = styled.button`
all: unset;
background-color: var(--accent-color);
padding: 0.5rem 1.5rem;
border-radius: 8px;
font-size: 1.5rem;
box-shadow: var(--box-shadow);
text-align: center;
color: var(--always-light);
`

export const Container = styled.div`
width: 100%;
max-width: 1280px;
padding: 2rem;
margin: 0 auto;
position: relative;
transition: all 200ms;
`
export const GridTwo = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 0 2rem;
`
import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  body: 'var(--dark)',
  color: 'var(--light)',
  nav: 'var(--nav-dark)',
  toggle: 'var(--toggle-dark)',
  accent: 'var(--accent-light)',
  link: 'var(--link-dark)'
}

export const lightTheme = {
  body: 'var(--light)',
  color: 'var(--dark)',
  nav: 'var(--nav-light)',
  toggle: 'var(--toggle-light)',
  accent: 'var(--accent-dark)',
  link: 'var(--toggle-light)'
}

export const GlobalStyles = createGlobalStyle`
:root {
    --dark:#1a202c;
    --light:#f7fafc;
    --accent-dark:#68D391;
    --accent-light:#9AE6B4;
    --toggle-light:#6b46c1;
    --toggle-dark:#f6ad55;
    --nav-light:#f7fafc70;
    --nav-dark:#1a202c70;
    --link-dark: #b2f5ea;
    --box-shadow: 0 1px 5px rgba( 0,0,0, 0.1 ); 
    --box-shadow-hover: 0 2px 6px rgba( 0,0,0, 0.3 ); 
    --border-radius: 7px;
}

* {
    scroll-behavior: smooth;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

html {
    width:100%;
    overflow-x: hidden;
}

body {
    margin:0;
    padding:0;
    font-family:'Inter', sans-serif;
    transition: all 200ms;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.color};
}

h1,
h2,
h3,
h4,
h5 {
    font-family:'Montserrat', sans-serif;
    margin:.5rem 0;
}

h1 {
    font-size: clamp( 3rem,2rem + 1vw,4.5rem );
    font-weight:600;
}

h2 {
    font-size: clamp( 2.5rem,1.5rem + 1vw,3rem );
    font-weight:400;
    text-align:center;
}

h3 {
    font-size: clamp( 2rem,1rem + 1vw,2rem );
    font-weight:300;
}

h4 {
    font-size: clamp( 1.2rem,.8rem + 1vw,1.5rem );
    font-weight:400;
}

p {
    margin-top:0;
}

p,
span,
li,
strong,
blockquote {
    font-size: clamp(1rem,0.9rem + 1vw,1.2rem);
    line-height:clamp(2rem, 1rem + 1vw, 2.2rem);
    text-align: justify;
}

a {
    font-size: 1.3rem;
    text-decoration:none;
    color:inherit;
   }
`

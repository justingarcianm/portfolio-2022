import styled from 'styled-components'
import { motion } from 'framer-motion'

export const BGImageWrapper = styled.div`
width:300px;
padding:1rem;
`;

export const ImageWrapper = styled.div`
  width:100%;
  min-height:400px;
  position:relative;
  box-shadow:var(--box-shadow);
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
`





export const PostTitle = styled(motion.div)`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

  width:100%;
  z-index:10;
  & h2 {
    font-size:5rem;
  }
`;

export const PostHeader = styled(motion.div)`
  position:relative;
  width: 100%;
  height: 60vh;
  margin:auto;
  background-color:var(--accent-color);
  & > div {
    position:absolute;
    height:inherit;
    right:0;
    width:50%;
    top:50%;
    transform:translateY(-50%);
    color:var(--always-dark);
  }
  & > div:first-child {
    left:10%;
    width:60%;
    z-index:10;
    padding:2rem;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    gap:2rem;
    & h2 {
      font-size: clamp( 2rem, 5vw, 6rem );
      font-weight:600;
      line-height:5vw;
    }
    & p {
      width:50%;
    }
    & .categories {
      background-color:#efefef;
      padding:.5rem 1rem .5rem 0;
      border-radius:20px;
      width:fit-content;
    } & .title {
      background-color:var(--always-light);
      padding:.5rem 1rem;
      border-radius:20px;
      width:fit-content;
      box-shadow: 2px 0 1px hsl(var(--shadow-color) / 0.2;
    }
  } & .label {
    margin: 0 .5rem;
  }
`;

export const AuthorMeta = styled.div`
  width:fit-content;
  display:grid;
  grid-template-columns: 1fr 4fr;
  gap:.5rem;
  align-items:center;
  & > span:first-child {
    border-radius:50%;
    width:50px;
  }
`

// export const MDContainer = styled(SectionDiv)`
//   & * {
//     text-align:justify;
//   }
//   & h1,h2,h3,h4,h5,h6 {
//     margin: 1.5rem auto .5rem auto;
//     width:100%;
//   }
//   & img,pre {
//     margin:1rem auto;
//     width:100%;
//   }
//   & p {
//     font-size:1.1rem;
//     line-height:2.1rem;
//   }
// `;

// export const PostContent = styled(Container)`
//   display:grid;
//   grid-template-columns:1fr 3fr;
//   place-items:baseline;
//   max-width:1000px;
//   gap: 2rem;
// `;

export const SocialWrapper = styled.div`
  display:flex;
  gap: 1rem;
  justify-content:flex-start;
  align-items: baseline;
  max-width:100%;
  border-top: 2px solid var(--accent-color);
  padding-top:2rem;
  margin:auto;
`;

export const SocialLink = styled(motion.a)`
background-color:${props => props.bg || 'transparent'};
display:flex;
justify-content:center;
align-items: center;
padding:.5rem;
border-radius:var(--border-radius);
box-shadow:var(--box-shadow);
color:var(--always-light);
`;

export const TOC = styled.div`
  
  position:sticky;
  top:15%;
  align-self:start;
  & ul {
    border: 1px solid var(--accent-color);
  border-width: 1px 0;
  color:var(--accent-color);
  padding:1rem;
  }

  & li {
    list-style:none;
  }
`;



export const Sidebar = styled.div`
    position:sticky;
    top:10%;
`;
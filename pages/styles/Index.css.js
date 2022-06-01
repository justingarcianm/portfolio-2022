import styled from "styled-components"
import { motion } from "framer-motion";
import { size } from "../../theme/global.css"

export const HomeTitle = styled.h1`
    font-size: clamp( 3rem, 2.5rem + 10vw, 6rem );
    line-height: clamp( 4rem, 3.5rem + 6vw, 7rem );
    font-weight:600;

    & span {
        color:${props => props.theme.accent};
        display:block;
        width:max-content;
        font-size:65%;
        line-height: clamp( 3.5rem, 3rem + 3vw, 6rem );
        text-transform: uppercase;
        padding-top:1rem;

        @media ${size.medium} {
            display:table-cell;
        }

    }
`

export const UnderLine = styled(motion.div)`
position: absolute;
bottom: -1px;
left: 0;
right: 0;
height: 3px;
background: var(--accent);
}
`;

export const CategoryContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  gap:1rem;
  & span {
    text-align:center;
    width:fit-content;
    background-color:var(--light);
    color:var(--dark);
    padding: .5rem 1rem;
    border-radius:20px;
    cursor:pointer;
    box-shadow:var(--box-shadow);
    transition: all ease 300ms;

    &:hover,
    &.active {
        box-shadow:var(--box-shadow-hover);
        background-color:${props => props.theme.accent};
        color:var(--light);
    }
  }
`;
import styled from 'styled-components'
import { Container } from '../../theme/global.css'
import { size } from '../../theme/global.css'

export const FooterSocial = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;

  @media ${size.small} {
    justify-content: center;
  }
`

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${size.small} {
    flex-direction: column;
    gap: 1rem;
  }
`

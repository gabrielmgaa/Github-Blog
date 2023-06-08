import { styled } from 'styled-components'

import bgHeader from '../../assets/bg-header.png'

export const HeaderContainer = styled.header`
  width: 100%;
  background: url(${bgHeader}) no-repeat center;
  min-height: 29rem;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
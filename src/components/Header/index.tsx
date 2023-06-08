import * as C from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <C.HeaderContainer>
      <img src={logo} alt="" />
    </C.HeaderContainer>
  )
}
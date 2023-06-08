import { Link as LinkRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import * as C from './styles'

interface LinkProps{
  value: string
  to?: string
  comeback?: boolean
}

export function Link({ value, comeback = false, to }: LinkProps) {

  if (comeback) {
    return (
      <C.LinkContainer>
        <LinkRouter to="/">
          <FontAwesomeIcon icon={faChevronLeft} size="xs" />
          <span>voltar</span>
        </LinkRouter>
      </C.LinkContainer>
    )
  }

  return (
    <C.Link href={to} target="_blank">
      <span>{value}</span>
      <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
    </C.Link>
  )
}
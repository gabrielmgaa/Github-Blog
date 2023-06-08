import { formatDateToBR } from '../../../../utils/formatToPtBR'

import * as C from './styles'

interface PostsCardsProps {
  number: number
  body: string
  title: string
  created_at: string
}

export function PostsCard({ body, title, number, created_at }: PostsCardsProps) {
  const { date } = formatDateToBR(created_at)
  
  return (
    <C.PostsContainer to={`/post/${number}`}>
      <C.PostsHeader>
        <h3>{title}</h3>
        <span>{date}</span>
      </C.PostsHeader>
      <p>
        {body}
      </p>
    </C.PostsContainer>
  )
}
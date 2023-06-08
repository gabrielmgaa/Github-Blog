import { Link } from '../../../../components/Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faComment, faCalendar } from '@fortawesome/free-solid-svg-icons'

import { formatDateToBR } from '../../../../utils/formatToPtBR'

import * as C from './styles'

import { PostsData } from '../..'

export function Title({ 
  title, 
  user, 
  comments, 
  created_at, 
  html_url 
}: PostsData) {

  const { date } = formatDateToBR(created_at)

  return (
    <C.PostsContainer>
      <C.PostsHeader>
        <Link value="voltar" comeback />
        <Link value="ver no github" to={html_url} />
      </C.PostsHeader>

      <h2>{title}</h2>
      <C.PostsContainerItems>
        <C.Item>
          <FontAwesomeIcon size="lg" icon={faGithub} />
          <span>{user.login}</span>
        </C.Item>
        <C.Item>
          <FontAwesomeIcon size="lg" icon={faCalendar} />
          <span>{date}</span>
        </C.Item>
        <C.Item>
          <FontAwesomeIcon size="lg" icon={faComment} />
          <span>{comments} comentários</span>
        </C.Item>
      </C.PostsContainerItems>
    </C.PostsContainer>
  )
}
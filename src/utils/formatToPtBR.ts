import { formatDistanceToNow } from 'date-fns'
import br from 'date-fns/locale/pt-BR'

export function formatDateToBR(dateInString: string){
  const createdAtInDateFormat = new Date(dateInString)
  const date = formatDistanceToNow(createdAtInDateFormat, {
    addSuffix: true,
    locale: br
  })

  return {
    date
  }
}
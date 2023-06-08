import * as z from 'zod'
import * as C from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchInputProps {
  lenght: number
  getIssueData: (query: string) => Promise<void>
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchInput({ lenght, getIssueData }: SearchInputProps) {

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleQueryIssue(data: SearchFormInput){
    await getIssueData(data.query)
  }

  return (
    <C.SearchInputContainer onSubmit={handleSubmit(handleQueryIssue)}>
      <C.SearchHeader>
        <C.SearchHeaderTitle>Publicações</C.SearchHeaderTitle>
        <C.SearchHeaderPosts>{lenght} publicações</C.SearchHeaderPosts>
      </C.SearchHeader>
      <C.SearchInput
        type="text"
        placeholder="Busque conteúdo"
        {...register('query')}
      />
    </C.SearchInputContainer>
  )
}
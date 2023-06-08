import { useEffect, useState } from 'react'

import { Spinner } from '../../components/Spinner'
import { Title } from './components/Title'

import { api } from '../../lib/axios'

import { useParams } from "react-router-dom"

import * as C from './styles'
import { Content } from './components/Content'

export interface PostsData {
  comments: number
  body: string
  created_at: string
  html_url: string
  title: string
  user: {
    login: string
  }
}

export function Posts() {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<PostsData>({} as PostsData)

  const { id } = useParams()

  useEffect(() => {
    async function getUniquePost() {
      try {
        const res = await api(`/repos/gabrielmgaa/Coffe-Delivery/issues/${id}`)
        setPosts(res.data)
      } finally {
        setIsLoading(false)
      }
    }
    getUniquePost()
  }, [id])


  return (
    <main>
      <C.Wrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Title
              {...posts}
            />
            <Content
              {...posts}
            />
          </>
        )}
      </C.Wrapper>
    </main>
  )
}
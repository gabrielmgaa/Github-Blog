import { useEffect, useState, useCallback } from "react";

import { Profile } from "./components/Profile";
import { Spinner } from "../../components/Spinner";

import { api } from "../../lib/axios";

import * as C from './styles'
import { PostsCard } from "./components/PostsCard";
import { SearchInput } from "./components/SearchInput";

interface Posts {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [isLoading, setIsLoading] = useState(true)


  async function getIssueData(query: string) {
    try {
      const res = await api(`/search/issues?q=${query}+in:title+repo:gabrielmgaa/Coffe-Delivery`)
      setPosts(res.data.items)
    } finally {
      setIsLoading(false)
    }
  }

  const getIssuesData = useCallback(async () => {
    try {
      const res = await api('/repos/gabrielmgaa/Coffe-Delivery/issues')
      setPosts(res.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getIssuesData();
  }, [getIssuesData])
  return (
    <main>
      <Profile />
      <SearchInput
        lenght={posts.length}
        getIssueData={getIssueData}
      />
      <C.PostsGrid>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {posts.map(post => (
                <PostsCard
                  key={post.number}
                  body={post.body}
                  title={post.title}
                  number={post.number}
                  created_at={post.created_at}
                />
              ))
            }
          </>
        )}
      </C.PostsGrid>
    </main>
  )
}
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Posts } from './pages/Posts'

import { DefaultLayout } from './Layout/DefaultLayout'


export function Routers(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Posts />} />
      </Route>
    </Routes>
  )
}
import PostsPage from './Pages/PostsPage'
import { Toaster } from 'react-hot-toast'
import { Routes, Route, Navigate } from 'react-router-dom'
import ViewPostPage from './Pages/ViewPostPage'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/posts' replace />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/view-post/:id' element={<ViewPostPage />} />
      </Routes>

      <Toaster />
    </>
  )
}

export default App

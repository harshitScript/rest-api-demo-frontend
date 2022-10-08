import NewPostModal from './Components/NewPostModal'
import PostsFeed from './Components/PostsFeed'
import UpdateStatusForm from './Components/UpdateStatusForm'
import PageLayout1 from './Layouts/PageLayout1'

function App () {
  return (
    <PageLayout1>
      <UpdateStatusForm />
      <NewPostModal />
      <PostsFeed />
    </PageLayout1>
  )
}

export default App

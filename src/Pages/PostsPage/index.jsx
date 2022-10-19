import PageLayout1 from '../../Layouts/PageLayout1'
import UpdateStatusForm from './components/UpdateStatusForm'
import NewPostModal from './components/NewPostModal'
import PostsFeed from './components/PostsFeed'
import PostPageCountProvider from './components/PostsPageCountProvider'

const PostsPage = () => {
  return (
    <PageLayout1>
      <UpdateStatusForm />
      <NewPostModal />
      <PostPageCountProvider>
        <PostsFeed />
      </PostPageCountProvider>
    </PageLayout1>
  )
}

export default PostsPage

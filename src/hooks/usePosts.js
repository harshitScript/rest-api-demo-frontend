import { useGetPostsQuery } from '../store/feedApi'
const usePosts = ({ page = 1 }) => {
  const {
    data,
    isLoading: postsLoading,
    isFetching: postsFetching,
    error: postsError
  } = useGetPostsQuery({
    page
  })

  return {
    posts: data,
    postsFetching,
    postsLoading,
    postsError
  }
}

export default usePosts

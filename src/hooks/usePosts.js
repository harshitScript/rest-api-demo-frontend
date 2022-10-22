import { useGetPostsQuery } from '../store/feedApi'
import useAuth from './useAuth'
const usePosts = ({ page = 1 }) => {
  const { getHeaderAuthTokenString } = useAuth()

  const {
    data,
    isLoading: postsLoading,
    isFetching: postsFetching,
    error: postsError
  } = useGetPostsQuery({
    page,
    headers: {
      Authorization: getHeaderAuthTokenString()
    }
  })

  return {
    posts: data,
    postsFetching,
    postsLoading,
    postsError
  }
}

export default usePosts

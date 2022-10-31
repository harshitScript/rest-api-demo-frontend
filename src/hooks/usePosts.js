import { useGetPostsQuery } from "../store/feedApi";
import useAuth from "./useAuth";
const usePosts = ({ page = 1 }) => {
  const { getHeaderAuthTokenString } = useAuth();

  const {
    data,
    isLoading: postsLoading,
    isFetching: postsFetching,
    error: postsError,
    refetch: refetchPosts,
  } = useGetPostsQuery({
    page,
    headers: {
      Authorization: getHeaderAuthTokenString(),
    },
  });

  return {
    posts: data,
    postsFetching,
    postsLoading,
    postsError,
    refetchPosts,
  };
};

export default usePosts;

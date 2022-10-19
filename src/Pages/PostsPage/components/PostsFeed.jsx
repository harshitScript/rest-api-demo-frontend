import { Card1 } from '../../../Components/UI/Card'
import { GiAmericanFootballBall } from 'react-icons/gi'

import Post from '../../../Components/UI/Post'
import usePosts from '../../../hooks/usePosts'

const PostsFeed = ({ pagesCount }) => {
  const { posts, postsFetching, postsLoading } = usePosts({
    page: 1
  })

  const isLoading = postsLoading || postsFetching

  return isLoading
    ? (
      <Card1 className='w-3/6 mx-auto mt-10 h-40 grid place-items-center'>
        <GiAmericanFootballBall
          size={40}
          color='#ffb7'
          className='animate-bounce'
        />
      </Card1>
      )
    : (
      <Card1 className='w-3/6 mx-auto mt-10 max-h-100 overflow-y-auto'>
        {posts?.length
          ? (
              posts.map((post, index) => <Post key={index} {...post} />)
            )
          : (
            <p className='text-center'>Uh oh no post found.</p>
            )}
      </Card1>
      )
}

export default PostsFeed

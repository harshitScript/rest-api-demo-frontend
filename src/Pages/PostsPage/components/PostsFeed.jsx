import { Card1 } from '../../../Components/UI/Card'
import { GiAmericanFootballBall } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import Post from '../../../Components/UI/Post'
import api from '../../../../api'

const PostsFeed = () => {
  const [postsData, setPostsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('feed/posts')
      .then((res) => {
        setLoading(false)
        setPostsData(res.data)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
      })
  }, [])

  return loading
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
        {postsData?.length
          ? (
              postsData.map((post, index) => <Post key={index} {...post} />)
            )
          : (
            <p className='text-center'>Uh oh no post found.</p>
            )}
      </Card1>
      )
}

export default PostsFeed
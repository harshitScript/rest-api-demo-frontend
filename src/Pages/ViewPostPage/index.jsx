import PageLayout1 from '../../Layouts/PageLayout1'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../../api'
import toast from 'react-hot-toast'
import styled from 'styled-components'

const ViewPostPage = () => {
  const { id } = useParams()

  const [post, setPost] = useState({})

  useEffect(() => {
    api
      .get(`/feed/post/${id}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch(() => {
        toast.error('Error Occurred while fetching post.', {
          position: 'top-center'
        })
      })
  }, [])

  return (
    <PageLayout1>
      <section className='flex justify-between'>
        <div className='p-2 flex items-center justify-center w-2/4'>
          <PostImage src={post?.image} alt={`${post?.title}`} />
        </div>
        <div className='p-2 w-2/4'>
          <Title>{post?.title}</Title>
          <br />
          <Description>{post?.description}</Description>
          <br />
          <span>{post?.userId?.username}</span>
        </div>
      </section>
    </PageLayout1>
  )
}

const PostImage = styled.img`
  width: 90%;
  height: 400px;
  object-fit: contain;
  border-radius: 0.5rem;
`

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

const Description = styled.span`
  font-size: 0.7rem;
  color: #ffb7;
`

export default ViewPostPage

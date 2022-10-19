import PageLayout1 from '../../Layouts/PageLayout1'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSinglePostQuery } from '../../store/feedApi'

const ViewPostPage = () => {
  const { id } = useParams()

  const { data: post } = useGetSinglePostQuery({ id })

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

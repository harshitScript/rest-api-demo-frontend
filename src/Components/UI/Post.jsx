import { memo } from 'react'
import styled from 'styled-components'
import PostMenu from './PostMenu'

const Post = ({ title, description, image, _id, createdAt, userId }) => {
  return (
    <PostOuter>
      <div className='flex items-center justify-between'>
        <div className='mb-3 flex gap-4'>
          <UserImage src={userId.image} alt='user' className='rounded-full' />
          <section>
            <UserName>{userId.username}</UserName>
            <br />
            <span>{createdAt.slice(0, 10)}</span>
          </section>
        </div>
        <PostMenu postId={_id} />
      </div>
      <PostTitle>{title}</PostTitle>
      <figure>
        <PostImg src={image} alt='title' height='200px' width='100%' />
        <figcaption>{description}</figcaption>
      </figure>
    </PostOuter>
  )
}

const PostOuter = styled.article`
  padding: 1rem;
  border-radius: 1rem;
  min-height: 150px;
  box-shadow: 0 0 0 4px #ffb7;
  width: 80%;
  margin: 1rem auto;
`

const PostTitle = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 5px 0;
`

const UserImage = styled.img`
  height: 60px;
  width: 60px;
  outline: 1px solid #ffb7;
  outline-offset: 2px;
`

const UserName = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`

const PostImg = styled.img`
  box-shadow: 0 0 0 1px grey;
  border-radius: 0.5rem;
`

export default memo(Post)

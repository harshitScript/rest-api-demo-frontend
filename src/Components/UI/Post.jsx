import styled from 'styled-components'

const Post = ({ title, description, image }) => {
  return (
    <PostOuter>
      <div className='mb-3 flex gap-4'>
        <UserImage src={image} alt='user' className='rounded-full' />
        <section>
          <UserName>USER-NAME</UserName>
          <br />
          <span>DD-MM-YYYY</span>
        </section>
      </div>
      <PostTitle>{title}</PostTitle>
      <figure>
        <img src={image} alt='title' height='200px' width='100%' />
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
  margin: 0.5rem auto;
`

const PostTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
`

const UserImage = styled.img`
  height: 60px;
  width: 60px;
  outline: 1px solid #ffb7;
  outline-offset: 2px;
`

const UserName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

export default Post

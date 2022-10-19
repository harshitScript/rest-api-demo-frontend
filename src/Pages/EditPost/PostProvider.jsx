import { cloneElement } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSinglePostQuery } from '../../store/feedApi'

const PostProvider = ({ children }) => {
  const { id } = useParams()

  const { data: post } = useGetSinglePostQuery({ id })

  if (post) {
    return cloneElement(children, { post })
  }
  return <></>
}

export default PostProvider

import { useState } from 'react'
import CreatePostForm from './CreatePostForm'
import CustomModal1 from '../../../Components/modals/CustomModal1'
import { Button3 } from '../../../Components/UI/Button'

const NewPostModal = () => {
  const [showModals, setShowModals] = useState({
    post: false,
    success: false,
    error: false
  })
  return (
    <>
      <div className='mt-5 w-full flex justify-center'>
        <Button3
          onClick={setShowModals.bind(null, (current) => ({
            ...current,
            post: true
          }))}
        >
          New Post
        </Button3>
      </div>
      {showModals.post
        ? (
          <CustomModal1
            title='Add New Post'
            onClose={setShowModals.bind(null, (current) => ({
              ...current,
              post: false
            }))}
          >
            <CreatePostForm
              onCancel={setShowModals.bind(null, (current) => ({
                ...current,
                post: false
              }))}
            />
          </CustomModal1>
          )
        : (
          <></>
          )}
    </>
  )
}
export default NewPostModal

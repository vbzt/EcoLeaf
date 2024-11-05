import React from 'react'
import PostForm from '../../../components/form/PostForm'
import useBlog from '../../../hooks/useBlog'

const CreatePost = () => {
    const { create } = useBlog()
  return (
    <PostForm onSubmit={create}></PostForm>
  )
}

export default CreatePost

import React from 'react'
import PostForm from '../../../components/form/PostForm'
import useBlog from '../../../hooks/useBlog'

const CreatePost = () => {
    const { create } = useBlog()
    
    async function registerPost(post) {
      const formData = new FormData()
      
      Object.keys(post).forEach((key) => {
        if (key === 'image' && post[key]) { 
          formData.append('image', post[key]) 
        } else {
          formData.append(key, post[key])
        }
      })
  
      await create(formData)
    }
  
    return (
      <PostForm handleSubmit={registerPost} />
    )
}

export default CreatePost

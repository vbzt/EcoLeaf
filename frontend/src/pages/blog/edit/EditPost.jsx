import React, { useEffect, useState } from 'react'
import PostForm from '../../../components/form/PostForm'
import useBlog from '../../../hooks/useBlog'
import { useParams } from 'react-router-dom'

const EditPost = () => {
  const { getPostById, edit } = useBlog()
  const params = useParams()
  const [initialPost, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const { post } = await getPostById(params.id)
      if (post) {
        setPost(post)
      }
    }

    getPost()
  }, [params.id]) 

  const updatePost = async (post) => {
    const formData = new FormData()

    Object.keys(post).forEach((key) => {
      if (key === 'user') {
        Object.keys(post[key]).forEach((userKey) => {
          formData.append(`${key}[${userKey}]`, post[key][userKey])
        })
      } else if (key === 'image' && post[key]) {
        formData.append('image', post[key])
      } else {
        formData.append(key, post[key])
      }
    })

    await edit(formData, params.id)
  }

  const handleSubmit = async (post) => {
    await updatePost(post)
  }

  return (
    <PostForm postData={initialPost} handleSubmit={handleSubmit} />
  )
}

export default EditPost

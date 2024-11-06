import React, { useContext, useEffect, useState } from 'react'
import PostForm from '../../../components/form/PostForm'
import { Context } from '../../../context/userContext'
import useBlog from '../../../hooks/useBlog'
import { useParams } from 'react-router-dom'

const EditPost = () => {
  const { getPostById, edit} = useBlog() 
  const params = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {   
    const getPost = async () => { 
      const { post } = await getPostById(params.id)
      setPost(post)
    }

    getPost()
    
  }, [])

  const handleSubmit = () => { 
    edit(post, params.id)
  }

  return (
    <PostForm postData={post} onSubmit={handleSubmit} />
  ) 
}

export default EditPost

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
  async function updatePost(post) {
    const formData = new FormData();
  
    Object.keys(post).forEach((key) => {
      if (key === 'image' && post[key]) {
        formData.append(key, post[key]);  // Append the single image (file)
      } else {
        formData.append(key, post[key]);  // Append other fields
      }
    });
  
    // Debug log (optional, can be removed later)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  }
  
  
  const handleSubmit = async () => { 
    await updatePost(post)
    await edit(post, params.id)
  }

  return (
    <PostForm postData={post} onSubmit={handleSubmit} />
  ) 
}
 
export default EditPost

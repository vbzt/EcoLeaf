import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import useFlashMessage from './useFlashMessage'

const useBlog = () => {
  const navigate = useNavigate()
  const { setFlashMessage } = useFlashMessage()

  const fetchData = async (search = '', order = 'new') => {
    try {
      const { data} = await api.get(`/blog?search=${search}&order=${order}`)
      return data.postsData
    } catch (error) {
      console.error("Erro ao buscar posts:", error)
      return { postsData: [] }
    }
  }


  const create = async (post) => {
    let msgText = 'Post criado com sucesso!'
    let msgType = 'success'
    
    try {
      const { data } = await api.post('/blog/create', post, { withCredentials: true })
      navigate('/blog')
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  return { fetchData, create }
}

export default useBlog
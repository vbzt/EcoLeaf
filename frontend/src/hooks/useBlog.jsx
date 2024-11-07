import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import useFlashMessage from './useFlashMessage'

const useBlog = () => {
  const navigate = useNavigate()
  const { setFlashMessage } = useFlashMessage()

  const fetchData = async (search = '') => {
    try {
      const { data } = await api.get(`/blog?search=${search}`)
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
      navigate('/profile')
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const edit = async (post, id) => {
    let msgText = 'Post editado com sucesso!'
    let msgType = 'success'
    
    try {
      const { data } = await api.patch(`/blog/${id}`, post, { withCredentials: true })
      navigate('/blog')
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const remove = async(id) => { 
    let msgText = 'Post removido com sucesso!'
    let msgType = 'success'

    try{ 
      const { data } = await api.delete(`/blog/${id}`, { withCredentials: true })
      navigate('/profile')
    }catch(e){ 
      msgText = e.response.data.message 
      msgType = 'error'
    }
    setFlashMessage(msgText, msgType)
  }
  
  const getPostById = async (id) => { 
    try {
      const {data} = await api.get(`/blog/${id}`, { withCredentials: true })
      return data
    } catch (error) {
      console.log(error.response.data.message)
      return null
    }
  }

  return { fetchData, create, edit, getPostById, remove }
}

export default useBlog

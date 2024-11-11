import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import useFlashMessage from './useFlashMessage'

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const { setFlashMessage } = useFlashMessage()
  const navigate = useNavigate()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data } = await api.get('/users/checkuser', { withCredentials: true })
      setAuthenticated(!!data.currentUser)
      return data
    } catch (error) {
      setAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const register = async (user) => { 
    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'
    
    try {
      const { data } = await api.post('/users/register', user, { withCredentials: true })
      setAuthenticated(true)
      navigate('/')
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const login = async (user) => {
    let msgText = 'Login realizado com sucesso!'
    let msgType = 'success'

    try {
      await api.post('/users/login', user, { withCredentials: true })
      await checkUser()
      navigate('/')
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const edit = async (user, id) => { 
    let msgText = 'Usuário atualizado com sucesso!'
    let msgType = 'success'

    try {
      await api.patch(`/users/edit/${id}`, user, { withCredentials: true })
      navigate('/profile')
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const logout = async () => {
    let msgText = 'Logout realizado com sucesso!'
    let msgType = 'success'

    try {
      await api.get('/users/logout', { withCredentials: true })
      setAuthenticated(false)
      navigate('/login')
    } catch (error) {
      msgText = error.response?.data?.message || 'Erro ao fazer logout.'
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const getUserById = async (id) => {
    try {
      const {data} = await api.get(`/users/${id}`, { withCredentials: true })
      return data.user
    } catch (error) {
      console.log(error.response.data.message)
    }

  }

  return { authenticated, edit, login, logout, register, checkUser, getUserById, loading}
}

export default useAuth

import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFlashMessage from './useFlashMessage'


const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const { setFlashMessage } = useFlashMessage()
  const navigate = useNavigate()

  useEffect(() => { 
    const checkAuth = async () => { 
      const response = await api.get('/users/checkuser')
      if(response.data.currentUser) setAuthenticated(true)
    }

    checkAuth()
  }, [])

  const register = async (user) => { 
    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'

    try {
      const { data } = await api.post('/users/register', user)
      await authUser()
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const login = async (user) =>{ 
    let msgText = 'Login realizado com sucesso!'
    let msgType = 'success'

    try {
      const { data } = await api.post('/users/login', user)
      await authUser()
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
  }
  setFlashMessage(msgText, msgType)

  }

  const logout = async (user) => { 
    const msgText = 'Logout realizado com sucesso'
    const msgType = 'success'
    setAuthenticated(false)
    try{ 
      const { data } = await api.post('/users/logout')
    }catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }
    
    setFlashMessage(msgText, msgType)

  }
  
  const authUser = async () => {
    setAuthenticated(true)
    navigate('/')
  }

  return { authenticated, register, login, logout}
}

export default useAuth

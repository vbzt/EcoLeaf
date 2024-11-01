  import api from '../utils/api'
  import { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import useFlashMessage from './useFlashMessage'

  const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const { setFlashMessage } = useFlashMessage()
    const navigate = useNavigate()

    const register = async (user) => {
      let msgText = 'Cadastro realizado com sucesso!'
      let msgType = 'success'
    
      try {
        await api.post('/users/register', user, { withCredentials: true })
        await authUser()
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
        await authUser()
      } catch (error) {
        msgText = error.response.data.message
        msgType = 'error'
      }
    
      setFlashMessage(msgText, msgType)
    }
    

    const logout = async () => { 
      let msgText = 'Logout realizado com sucesso'
      let msgType = 'success'
      try { 
        await api.post('/users/logout')
        setAuthenticated(false)
      } catch (error) {
        msgText = error.response.data.message
        msgType = 'error'
      }
      
      setFlashMessage(msgText, msgType)
    }

    const checkUser = async () => { 
      const { data } = await api.get('/users/checkuser', {withCredentials: true})
      if(!data.currentUser){
        setAuthenticated(false)
        console.log(authenticated)
        return
      }
      setAuthenticated(true)
      console.log(authenticated)
      
    }

    const authUser = async () => {
      setAuthenticated(true)
      navigate('/')
    }

    return { authenticated, register, login, logout, checkUser }
  }

  export default useAuth

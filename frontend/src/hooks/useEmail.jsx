import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import useFlashMessage from './useFlashMessage'

const useEmail = () => {
  const navigate = useNavigate()
  const { setFlashMessage } = useFlashMessage()

  const sendEmail = async (email) => {
    let msgType = 'success'
    let msgText = 'Email enviado com sucesso!'
    try {
      const { data } = await api.post(`/contate-nos`, email, {withCredentials: true})
      
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }


  return { sendEmail }
}

export default useEmail

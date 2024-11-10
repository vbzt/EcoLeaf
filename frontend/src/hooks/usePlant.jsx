import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import useFlashMessage from './useFlashMessage'

const usePlant = () => {
  const navigate = useNavigate()
  const { setFlashMessage } = useFlashMessage()

  const generatePlant = async (plant) => { 
    let msgText = 'Planta gerada com sucesso!'
    let msgType = 'success'

    try {
      const { data } = await api.post('/plantas/generate-plant', plant, { withCredentials: true})
      console.log(data.parsedResponse)
      return data.parsedResponse

    } catch (error) {
      console.log(error)
    }
  }

  return { generatePlant }
}

export default usePlant

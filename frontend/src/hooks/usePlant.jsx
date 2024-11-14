import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import useFlashMessage from './useFlashMessage'

const usePlant = () => {
  const navigate = useNavigate()
  const { setFlashMessage } = useFlashMessage()

  const fetchPlants = async (search = '') => {
    try {
      const { data } = await api.get(`/plantas`, {params: { search }, withCredentials: true})
      return data.plantsData
    } catch (error) {
      console.error("Erro ao buscar posts:", error)
      return []
    }
  }

  const generatePlant = async (plant) => { 
    let msgText = 'Planta gerada com sucesso!'
    let msgType = 'success'

    try {
      const { data } = await api.post('/plantas/generate-plant', plant, { withCredentials: true})
      console.log(data)
      return data.parsedResponse

    } catch (error) {
      console.log(error)
    }

    setFlashMessage(msgText, msgType)
  }

  const remove = async (id) => { 
    let msgText = 'Planta removida com sucesso!'
    let msgType = 'success'

    try{ 
      const { data } = await api.delete(`/plantas/${id}`, { withCredentials: true })
    }catch(e){ 
      msgText = e.response.data.message 
      msgType = 'error'
    }
    setFlashMessage(msgText, msgType)
  }

  return { fetchPlants, generatePlant, remove }
}

export default usePlant

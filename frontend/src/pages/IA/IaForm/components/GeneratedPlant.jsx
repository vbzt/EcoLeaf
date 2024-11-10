import { useEffect, useState } from 'react'
import usePlant from '../../../../hooks/usePlant'
import styles from './GeneratedPlant.module.css'

const GeneratedPlant = ({ plantData }) => {
  const { generatePlant } = usePlant()
  const [loading, setLoading] = useState(true)
  const [plant, setPlant] = useState(null)

  useEffect(() => {
    const fetchGeneratedPlant = async () => {
      setLoading(true)
      try {
        const response = await generatePlant(plantData)
        setPlant(response)
      } catch (error) {
        console.error('Erro ao gerar planta:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGeneratedPlant()
  }, [])

  if (loading) {
    return <div className={styles.loading}>Gerando planta...</div>
  }

  if (!plant) {
    return <div className={styles.error}>Erro ao gerar a planta. Tente novamente mais tarde.</div>
  }

  return (
    <div className={styles.plantContainer}>
      <h2>Planta Recomendada</h2>
      <p><strong>Nome Popular:</strong> {plant.popular}</p>
      <p><strong>Nome Científico:</strong> {plant.cientifico}</p>
      <p><strong>Descrição:</strong> {plant.descricao}</p>
      <img src= {plant.link} alt="" />
    </div>
  )
}

export default GeneratedPlant

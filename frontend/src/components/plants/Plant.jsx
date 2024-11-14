import { useContext, useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/dist/locale/pt-br'
import styles from './Plant.module.css'
import { Context } from '../../context/userContext'
import { NavLink } from 'react-router-dom'
import usePlant from '../../hooks/usePlant'

const Plant = ({ name, scientific, description, image, id, updatedAt, user, plantId }) => {
  const { getUserById } = useContext(Context)
  const [username, setUsername] = useState('')
  const [timestamp, setTimestamp] = useState('')
  const { remove } = usePlant()

  useEffect(() => {
    moment.locale('pt-br')

    const fetchPlantData = async () => {
      const user = await getUserById(id)
      setUsername(user.username)
      setTimestamp(moment(updatedAt).fromNow())
    }

    fetchPlantData()
  }, [id])

  const removePlant = async (id) => { 
    remove(id)
  }

  return (
    <div key={id} className={styles.plant}>
      <div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.scientific}>{scientific}</p>
      </div>
      <div className={styles.plantBody}>
        <p className={styles.description}>{description}</p>
        <img src={image} alt={name} />
      </div>
      <div className={styles.plantFooter}>
        <p>
          Por: <span className='colored'>{username}</span>
        </p>
        <p className={styles.timestamp}>{timestamp}</p>

        {user && ( 
          <div className={styles.options}>
            <p className='error' onClick={() => { removePlant(plantId) }} >Deletar</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Plant

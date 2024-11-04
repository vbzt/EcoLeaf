import { useContext, useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/dist/locale/pt-br'
import styles from './Post.module.css'
import { Context } from '../../context/userContext'

const Post = ({ title, description, image, id, updatedAt }) => {
  const { getUserById } = useContext(Context)
  const [username, setUsername] = useState('')
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    moment.locale('pt-br')

    const fetchPostData = async () => {
      const { user } = await getUserById(id)
      setUsername(user.username)
      setTimestamp(moment(updatedAt).fromNow())
    }
  
    fetchPostData()
  }, [id, getUserById, updatedAt])

  return (
    <div key={id} className={styles.post}>
      <div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.postBody}>
        <p className={styles.description}>{description}</p>
        <img src={image} alt="" />
      </div>
      <div className={styles.postFooter}>
        <p>
          Por: <span className='colored'>{username}</span>
        </p>
        <p className={styles.timestamp}>{timestamp}</p>
      </div>
    </div>
  )
}

export default Post

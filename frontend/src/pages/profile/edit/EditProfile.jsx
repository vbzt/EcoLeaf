import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context/userContext'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../../components/form/Input'


const EditProfile = () => {
  const [user, setUser] = useState({})
  const { checkUser } = useContext(Context)
  const { id } = useParams()
  const navigate = useNavigate()
  const { edit } = useContext(Context)

  useEffect(() => { 
    const fetchUserData = async () => { 
      const { currentUser } = await checkUser()
      setUser(currentUser)

    }

    fetchUserData()
    
  }, [id])

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await edit(user, id)
  }

  return (
    <section>
    <div className="d-flex justify-content-center flex-column align-items-center container">
      <div className="container d-flex flex-column mt-5" style={{ maxWidth: '580px' }}>
        <form className="form-bg card d-flex flex-column align-items-center justify-content-center p-3" onSubmit={handleSubmit}>
        <h1 className="mb-4 text-center">Editar Perfil</h1>
          <Input type="email" label="Email" name="email" placeholder="Digite seu email" value = {user.email} handleOnChange={handleChange}  />
          <Input type="text" label="Username" name="username" placeholder="Digite o nome de usuario" value = {user.username} handleOnChange={handleChange}  />
         
          
          <div className="button-group mt-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-success me-3" style={{ width: '150px' }}>Enviar</button>
            <a href="/" className="btn btn-secondary" style={{ width: '150px' }}>Voltar</a>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default EditProfile

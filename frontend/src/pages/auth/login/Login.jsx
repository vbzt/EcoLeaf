import { useContext, useState } from 'react'
import Input from '../../../components/form/Input'
import { Context } from '../../../context/userContext'

const Login = () => {
  
  const { login } = useContext(Context)
  
  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    login(user)
  }

  return (
    <section>
      <div className="d-flex justify-content-center flex-column align-items-center container">
        <div className="container d-flex flex-column mt-5" style={{ maxWidth: '580px' }}>
          <form className="form-bg card d-flex flex-column align-items-center justify-content-center p-3" onSubmit={handleSubmit}>
          <h1 className="mb-4 text-center">Login</h1>
            <Input type="email" label="Email" name="email" placeholder="Digite seu email" handleOnChange={handleChange}  />
            <Input type="password" label="Senha" name="password" placeholder="Digite a senha" handleOnChange={handleChange}  />
           
            <div className="d-flex mt-4 justify-content-start">
              <p>Ainda não possuí uma conta? <a href="/register" className='colored'>Clique aqui</a></p>
            </div>
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

export default Login
import Input from '../../components/form/Input'
import { useState } from 'react'
import useEmail from '../../hooks/useEmail'

const Contact = () => {
  const [message, setMessage] = useState({})
  const { sendEmail } = useEmail()

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : value
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const formattedValue = name === 'telefone' ? formatPhoneNumber(value) : value
    setMessage((prevMessage) => ({ ...prevMessage, [name]: formattedValue }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(message)
    await sendEmail(message)
  }

  return (
    <section>
      <div className="d-flex justify-content-center flex-column align-items-center container">
        <div className="container d-flex flex-column mt-5" style={{ maxWidth: '580px' }}>
          <h1 className="mb-4 text-center">Contrate-nos</h1>
          <form className="form-bg card d-flex flex-column align-items-center justify-content-center p-3" onSubmit={handleSubmit}>
            <Input type="text" label="Nome Completo ou Nome da Empresa" name="nomeContato" placeholder="Digite seu nome completo ou da empresa" handleOnChange={handleChange} required />
            <Input type="email" label="Email" name="email" placeholder="Digite seu email" handleOnChange={handleChange} required />
            <Input  type="tel"  label="Telefone"  name="telefone"  placeholder="(XX) XXXXX-XXXX"  handleOnChange={handleChange}  value={message.telefone || ''} required  />
            <Input type="number" label="CNPJ (para empresa)" name="cnpj" placeholder="Digite o CNPJ" handleOnChange={handleChange} />
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

export default Contact

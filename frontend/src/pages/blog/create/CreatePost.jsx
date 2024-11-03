import React, { useState, useRef } from 'react'
import Input from '../../../components/form/Input'
import Textarea from '../../../components/form/Textarea'
import api from '../../../utils/api'
import useBlog from '../../../hooks/useBlog'

const CreatePost = () => {
  const [post, setPost] = useState({})
  const [preview, setPreview] = useState([])
  const fileInputRef = useRef(null)
  const { create } = useBlog()

  const onFileChange = (e) => {
    const files = Array.from(e.target.files)
    setPreview(files)
    setPost({ ...post, image: files[0] }) 
  }

  const clearPhoto = () => {
    setPreview([])
    setPost({ ...post, image: undefined })
    fileInputRef.current.value = ''
  }

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    for (const key in post) {
      formData.append(key, post[key])
    }

    await create(formData)
  }

  return (
    <section>
      <div className="d-flex justify-content-center flex-column align-items-center container">
        <div className="container d-flex flex-column mt-5" style={{ maxWidth: '580px' }}>
          <form className="form-bg card d-flex flex-column align-items-center justify-content-center p-3" onSubmit={handleSubmit}>
            <h1 className="mb-4 text-center">Criar Post</h1>

            <Input type="text" label="Título do post" name="title" placeholder="Digite o título de seu post" handleOnChange={handleChange} />

            <Textarea label="Descrição do Post" name="description" placeholder="Digite a descrição do post" handleOnChange={handleChange} />

            <Input type="file" label="Foto do post" name="image" placeholder="Insira a foto do post" inputRef={fileInputRef} handleOnChange={onFileChange} />

            <div>
              {preview.length > 0 ? (
                preview.map((image, index) => (
                  <div key={index}>
                    <img src={URL.createObjectURL(image)} alt="Pré-visualização" style={{ maxWidth: '100%', marginBottom: '10px' }} />
                    <span onClick={clearPhoto} style={{ cursor: 'pointer', color: 'red' }}>Remover</span>
                  </div>
                ))
              ) : (
                post.image && <img src={`${import.meta.env.VITE_API}/images/posts/${post.image}`} alt="Imagem do post" />
              )}
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

export default CreatePost

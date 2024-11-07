import React, { useState, useRef } from 'react'
import Input from './Input'
import Textarea from './Textarea'

const PostForm = ({ postData, handleSubmit }) => {
  const [post, setPost] = useState(postData || {})
  const [preview, setPreview] = useState(null)
  const fileInputRef = useRef(null)

  const onFileChange = (e) => { 
    const file = e.target.files[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)
      setPost({ ...post, image: file })
    }
  }

  const handleChange = (e) => { 
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const submit = (e) => { 
    e.preventDefault()
    handleSubmit(post)
  }

  const clearPhoto = async () => { 
    setPost({ ...post, image: null })
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <section>
      <div className="d-flex justify-content-center flex-column align-items-center container">
        <div className="container d-flex flex-column mt-5" style={{ maxWidth: '580px' }}>
          <form className="form-bg card p-3 d-flex flex-column align-items-center" onSubmit={submit}>
            <h1 className="mb-4 text-center">{postData?.title ? "Editar Post" : "Criar Post"}</h1>
            
            <Input
              type="text"
              label="Título do post"
              name="title"
              placeholder="Digite o título de seu post"
              value={post.title}
              handleOnChange={handleChange}
            />

            <Textarea
              label="Descrição do Post"
              name="description"
              placeholder="Digite a descrição do post"
              value={post.description}
              handleOnChange={handleChange}
            />

            <Input
              type="file"
              label="Foto do post"
              name="image"
              handleOnChange={onFileChange}
              ref={fileInputRef}
            />

            <div>
              {preview ? ( 
                <div>
                  <img
                    src={preview}
                    alt="Pré-visualização"
                    className="imgPreview"
                  />
                  <span onClick={clearPhoto} className="text-danger pointer">Remover</span>
                </div>
              ) : <></>}
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

export default PostForm

import React, { useState, useRef, useEffect } from 'react'
import Input from './Input'
import Textarea from './Textarea'

const PostForm = ({ postData, onSubmit }) => {
  const fileInputRef = useRef(null)
  
  const initializePost = () => ({
    title: postData?.title || "",
    description: postData?.description || "",
    image: postData?.image || null
  })

  const [post, setPost] = useState(initializePost)

  useEffect(() => {
    setPost(initializePost)
  }, [postData])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setPost({ ...post, image: file })
  }

  const clearPhoto = () => {
    setPost({ ...post, image: null })
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    
    Object.entries(post).forEach(([key, value]) => {
      formData.append(key, value)
    })
    
    if (onSubmit) {
      await onSubmit(formData)
    }
  }

  return (
    <section>
      <div className="d-flex justify-content-center flex-column align-items-center container">
        <div className="container d-flex flex-column mt-5" style={{ maxWidth: '580px' }}>
          <form className="form-bg card p-3 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <h1 className="mb-4 text-center">{postData ? "Editar Post" : "Criar Post"}</h1>
            
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
              inputRef={fileInputRef}
              handleOnChange={handleFileChange}
            />

            <div>
              {post.image ? (
                <div>
                  <img
                    src={post.image instanceof File ? URL.createObjectURL(post.image) : `${import.meta.env.VITE_API}/images/posts/${post.image}`}
                    alt="Pré-visualização"
                    className="img-preview"
                  />
                  <span onClick={clearPhoto} className="text-danger pointer">Remover</span>
                </div>
              ) : null}
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

import Input from '../../components/form/Input'
import './Blog.css'
import SearchIcon from '../../assets/images/svg/LupaVerde.svg'
import { useEffect, useState } from 'react'
import api from '../../utils/api'
import Post from '../../components/posts/Post'
import { NavLink } from 'react-router-dom'
import useBlog from '../../hooks/useBlog'

const Blog = () => {

  const {fetchData} = useBlog()

  const [search, setSearch] = useState({})

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchData()
      setPosts(data)
    }
    getPosts()
  }, [])

  const handleSearch = (e) => { 
    setSearch({...search, [e.target.name]: e.target.value})
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(search)
  }





  return  (
    <section className='blog'>
      <header className="blogHeader">

        <form className='searchForm' onSubmit={handleSearchSubmit}>
          <Input type = 'text' name = 'search' label = '' handleOnChange={handleSearch} placeholder= 'Procurando algum post?'></Input>                      
          <button  type="submit" className= 'btn blogBtn'><img src={SearchIcon} alt="Buscar" className= 'iconLupa' /></button>
        </form>
        <div className="order">
          <form> 
            <Input type= 'hidden' name = 'search' value={search}></Input>
            <Input type= 'hidden' name = 'order' value='new'></Input>
            <button type="submit"><i className="fa-solid fa-arrow-up"></i></button>
          </form>
          <form> 
            <Input type= 'hidden' name = 'search' value={search}></Input>
            <Input type= 'hidden' name = 'order' value='old'></Input>
            <button type="submit"><i className="fa-solid fa-arrow-down"></i></button>
          </form>
        </div>
      </header>

      <div className="blogSearch">
        <p><span className='colored'>X</span> posts encontrado. <a className='colored' href="/blog">Limpar filtro</a></p>
      </div>

      <div className="addPost">
        <NavLink to= '/blog/create'><button>Adicionar Post</button></NavLink>
      </div>

      <div className="posts">
        { posts.length > 0 && posts.map((post) => (
          
          <Post key = {post._id} id = {post.user._id} title = {post.title} description={post.description} image={`${import.meta.env.VITE_API}/images/posts/${post.image}`} updatedAt = {post.updatedAt} ></Post>
        ))}
      </div>

    </section>
  )
}

export default Blog

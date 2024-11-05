import Input from '../../components/form/Input'
import './Blog.css'
import SearchIcon from '../../assets/images/svg/LupaVerde.svg'
import { useEffect, useState } from 'react'
import Post from '../../components/posts/Post'
import { NavLink } from 'react-router-dom'
import useBlog from '../../hooks/useBlog'

const Blog = () => {
  const { fetchData } = useBlog()

  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('new') 
  const [posts, setPosts] = useState([])

  const loadPosts = async () => {
    const data = await fetchData(search)
    setPosts(data)
  }

  useEffect(() => {
    loadPosts()
  }, [search, order]) 

  const handleSearchChange = (e) => {
    setSearch(e.target.value) 
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    loadPosts() 
  }

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder)
  }

  return (
    <section className='blog'>
      <header className="blogHeader">
        <form className='searchForm' onSubmit={handleSearchSubmit}>
          <Input
            type='text'
            name='search'
            label=''
            handleOnChange={handleSearchChange}
            placeholder='Procurando algum post?'
          />
          <button type="submit" className='btn blogBtn'>
            <img src={SearchIcon} alt="Buscar" className='iconLupa' />
          </button>
        </form>
      </header>

      <div className="blogSearch">
        <p><span className='colored'>{posts.length}</span> posts encontrados. <a className='colored' href="/blog">Limpar filtro</a></p>
      </div>

      <div className="addPost">
        <NavLink to='/blog/create'><button>Adicionar Post</button></NavLink>
      </div>

      <div className="posts">
        {posts.length > 0 && posts.map((post) => (
          <Post
            key={post._id}
            id={post.user._id}
            title={post.title}
            description={post.description}
            image={`${import.meta.env.VITE_API}/images/posts/${post.image}`}
            updatedAt={post.updatedAt}
          />
        ))}
      </div>
    </section>
  )
}

export default Blog

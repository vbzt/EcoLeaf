import Input from '../../components/form/Input'
import './Blog.css'
import SearchIcon from '../../assets/images/svg/LupaVerde.svg'
import { useState } from 'react'

const Blog = () => {

  const [search, setSearch] = useState({})

  const handleSearch = (e) => { 
    setSearch({...search, [e.target.name]: e.target.value})
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(search)
  }



  return (
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
            <button type="submit"><i class="fa-solid fa-arrow-up"></i></button>
          </form>
          <form> 
            <Input type= 'hidden' name = 'search' value={search}></Input>
            <Input type= 'hidden' name = 'order' value='old'></Input>
            <button type="submit"><i class="fa-solid fa-arrow-down"></i></button>
          </form>
        </div>
      </header>

      <div className="blogSearch">
        <p><span className='colored'>X</span> posts encontrado. <a className='colored' href="/blog">Limpar filtro</a></p>
      </div>

      <div className="addPost">
        <a href="/blog/create"><button>Adicionar Post</button></a>
      </div>

      <div className="posts">
        <div className="post">
          
        </div>
      </div>

    </section>
  )
}

export default Blog

import { NavLink } from "react-router-dom"
import './Profile.css'
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/userContext"
import useBlog from "../../hooks/useBlog"
import Post from "../../components/posts/Post"

const Profile = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState({})
  const [selectedOption, setSelectedOption] = useState("posts")

  const { logout, checkUser } = useContext(Context)
  const { fetchData } = useBlog()
  
  useEffect(() => {
    const fetchUserData = async () => {
      const { currentUser } = await checkUser()
      setUser(currentUser)
      return currentUser
    }
  
    const fetchUserPost = async () => { 
      const currentUser = await fetchUserData()
      const posts = await fetchData()
      const userPosts = posts.filter((post) => post.user._id === currentUser._id)
      setPosts(userPosts)
    }
    
    fetchUserPost()
  }, [])
  
  return (
    <section className='profile'>
      <header className="profileHeader">        
        <div className="profileTitle">
          <h3>Bem vindo, <span className="colored">{user.username}!</span></h3>
        </div>
        <div className="editProfile">
          <NavLink to='/profile/edit'>
            <button>Editar Perfil</button>
          </NavLink>
        </div>
        <div className="leave">
          <p className="error" onClick={logout}>Sair</p>
        </div>
      </header>

      <div className="options">
        <span  onClick={() => setSelectedOption("posts")} className={selectedOption === "posts" ? "colored" : ""}>Seus posts</span>
        <span onClick={() => setSelectedOption("plants")} className={selectedOption === "plants" ? "colored" : ""}>Plantas Cadastradas</span>
      </div>
      {selectedOption === 'posts' ? (
        <div className="posts">
          {posts.length > 0 && posts.map((post) => (
          <Post
            key={post._id}
            id={post.user._id}
            postId = {post._id}
            title={post.title}
            description={post.description}
            image={`${import.meta.env.VITE_API}/images/posts/${post.image}`}
            updatedAt={post.updatedAt}
            user = { true }
          />
        ))}
        </div>
      ) 
      : 
      (
        <></>
      )}
    </section>
  )
}

export default Profile

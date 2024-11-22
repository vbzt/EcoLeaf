import { NavLink } from "react-router-dom"
import './Profile.css'
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/userContext"
import useBlog from "../../hooks/useBlog"
import usePlant from "../../hooks/usePlant"
import Post from "../../components/posts/Post"
import Plant from "../../components/plants/Plant"

const Profile = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])  
  const [plants, setPlants] = useState([])  
  const [selectedOption, setSelectedOption] = useState("posts")

  const { logout, checkUser } = useContext(Context)
  const { fetchData } = useBlog()
  const { fetchPlants } = usePlant()

  useEffect(() => {
    const fetchUserData = async () => {
      const { currentUser } = await checkUser()
      setUser(currentUser)
      return currentUser
    }

    const fetchUserPost = async (currentUser) => { 
      const posts = await fetchData()
      const userPosts = posts.filter((post) => post.user._id === currentUser._id)
      setPosts(userPosts)
    }

    const fetchUserPlants = async (currentUser) => { 
      const plants = await fetchPlants()
      const userPlants = plants.filter((plant) => plant.user._id === currentUser._id)
      setPlants(userPlants)
    }

    const loadUserData = async () => {
      const currentUser = await fetchUserData()
      fetchUserPost(currentUser)
      fetchUserPlants(currentUser)
    }

    loadUserData()
  }, [])

  const handleRemovePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId))
  }

  const handleRemovePlant = (plantId) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant._id !== plantId))
  }

  return (
    <section className='profile'>
      <header className="profileHeader">        
        <div className="profileTitle">
          <h3>Bem vindo, <span className="colored">{user.username}!</span></h3>
        </div>
        <div className="editProfile">
          <NavLink to={`/profile/edit/${user._id}`}>
            <button>Editar Perfil</button>
          </NavLink>
        </div>
        <div className="leave">
          <p className="error" onClick={logout}>Sair</p>
        </div>
      </header>

      <div className="options">
        <span onClick={() => setSelectedOption("posts")} className={selectedOption === "posts" ? "colored" : ""}>Seus posts</span>
        <span onClick={() => setSelectedOption("plants")} className={selectedOption === "plants" ? "colored" : ""}>Plantas Cadastradas</span>
      </div>

      {selectedOption === 'posts' ? (
        <div className="posts">
          {Array.isArray(posts) && posts.length > 0 && posts.map((post) => (
            <Post
              key={post._id}
              id={post.user._id}
              postId={post._id}
              title={post.title}
              description={post.description}
              image={`${import.meta.env.VITE_API}/images/posts/${post.image}`}
              updatedAt={post.updatedAt}
              user={true}
              onRemove={handleRemovePost} // Passa a função de callback
            />
          ))}
        </div>
      ) : (
        <div className="plants">
          {Array.isArray(plants) && plants.length > 0 && plants.map((plant) => (
            <Plant
              key={plant._id}
              id={plant.user._id}
              name={plant.name}
              plantId={plant._id}
              scientific={plant.cientific}
              description={plant.description}
              image={plant.image}
              updatedAt={plant.updatedAt}
              user={true}
              onRemove={handleRemovePlant} // Passa a função de callback
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Profile


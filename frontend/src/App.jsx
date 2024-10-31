import './App.css'
import Container from './components/layouts/container/Container'
import Footer from './components/layouts/footer/Footer'
import Header from './components/layouts/header/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import Blog from './pages/blog/Blog'

function App() {

  return (
    <>
    <Router>
      <Header></Header>
      <Container>
        <Routes>
          <Route path = '/' element = {<Home></Home>}></Route>
          <Route path = '/blog' element = {<Blog></Blog>}></Route>
          <Route path = '/contate-nos' element = {<Contact></Contact>}></Route>
          <Route path = '/register' element = {<Register></Register>}></Route>
          <Route path = '/login' element = {<Login></Login>}></Route>
        </Routes>
        
      </Container>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App

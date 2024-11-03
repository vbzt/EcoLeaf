import './App.css'

import Container from './components/layouts/container/Container'
import Footer from './components/layouts/footer/Footer'
import Header from './components/layouts/header/Header'
import Message from './components/layouts/message/Message'

import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import Blog from './pages/blog/Blog'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { UserProvider } from './context/userContext'

import PrivateRoutes from './utils/PrivateRoutes'
import CreatePost from './pages/blog/create/CreatePost'

function App() {

  return (
    <>
    <Router>
      <UserProvider>
        <Header></Header>
        <Message></Message>
        <Container>
          <Routes>
            <Route path = '/' element = {<Home></Home>}></Route>
            <Route path = '/register' element = {<Register></Register>}></Route>
            <Route path = '/login' element = {<Login></Login>}></Route>

            <Route element = {<PrivateRoutes></PrivateRoutes>}>
                <Route path = '/blog' element = {<Blog></Blog>}></Route>
                <Route path = '/blog/create' element = {<CreatePost></CreatePost>}></Route>
                <Route path = '/contate-nos' element = {<Contact></Contact>}></Route>
            </Route>

          </Routes>
        </Container>
        <Footer></Footer>
      </UserProvider>
    </Router>
    </>
  )
}

export default App

import './App.css'
import Container from './components/layouts/container/Container'
import Footer from './components/layouts/footer/Footer'
import Header from './components/layouts/header/Header'
import Message from './components/layouts/message/Message'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserProvider } from './context/userContext'
import PrivateRoutes from './utils/PrivateRoutes'


import Home from './pages/home/Home'
import Ia from './pages/IA/Ia'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import Blog from './pages/blog/Blog'
import CreatePost from './pages/blog/create/CreatePost'
import EditPost from './pages/blog/edit/EditPost'
import Contact from './pages/contact/Contact'
import Profile from './pages/profile/Profile'
import IaForm from './pages/IA/IaForm/IaForm'

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Message />
        <Container>
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/plantas/ia' element={<Ia />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />


            <Route element={<PrivateRoutes />}>
              <Route path='/blog' element={<Blog />} />
              <Route path='/plantas/ia/gerar' element={<IaForm />} />
              <Route path='/blog/create' element={<CreatePost />} />
              <Route path='/blog/edit/:id' element={<EditPost />} />
              <Route path='/contate-nos' element={<Contact />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App

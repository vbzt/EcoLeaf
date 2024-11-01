import { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from '../context/userContext'

const PrivateRoutes = () => {
  const { authenticated, checkUser } = useContext(Context)

  useEffect(() => {
    checkUser()
  }, [checkUser])

  return authenticated ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes

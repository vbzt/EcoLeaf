import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from '../context/userContext'

const PrivateRoutes = () => {
  const { authenticated, loading } = useContext(Context)

  if (loading) {
    return <> </>
  }

  return authenticated ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes

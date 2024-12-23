import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext()

const UserProvider = ({children}) => { 
  const {register, authenticated, logout, login, edit, checkUser, loading, getUserById} = useAuth()

  return (
    <Context.Provider value = {{register, authenticated, logout, edit, login, checkUser, loading, getUserById}}>
      {children}
    </Context.Provider>
  )
}

export {Context, UserProvider }
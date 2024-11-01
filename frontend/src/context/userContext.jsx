import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext()

const UserProvider = ({children}) => { 
  const {register, authenticated, logout, login} = useAuth()

  return (
    <Context.Provider value = {{register, authenticated, logout, login}}>
      {children}
    </Context.Provider>
  )
}

export {Context, UserProvider }
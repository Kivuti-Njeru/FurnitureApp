import { createContext, useEffect, useReducer } from 'react'
import AuthReducer from './AuthReducer'

export const INITIAL_STATE = {
  currUser: JSON.parse(localStorage.getItem('User')) || null,
}

export const AuthContext = createContext(INITIAL_STATE)
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(state.currUser))
  }, [state.currUser])
  return (
    <AuthContext.Provider value={{ currUser: state.currUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

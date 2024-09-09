import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Furniture from './Furniture'
import Additem from '../components/Additem'
import Register from './Register'
import Login from './Login'
import { AuthContext } from '../contexts/Authcontext'

function Nav() {
  const { currUser } = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currUser ? children : <Navigate to='/login' />
  }
  return (
    <>
      <Routes>
        <Route
          path='/'
          index
          element={<Home />}
        />

        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/about'
          element={<About />}></Route>
        <Route
          path='/blog'
          element={<Blog />}></Route>
        <Route
          path='/contact'
          element={<Contact />}></Route>
        <Route
          path='/furniture'
          element={<Furniture />}></Route>
        <Route
          path='/register'
          element={<Register />}></Route>
        <Route
          path='/additem'
          element={<Additem />}></Route>
      </Routes>
    </>
  )
}

export default Nav

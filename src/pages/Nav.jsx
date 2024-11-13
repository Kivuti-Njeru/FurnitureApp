import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Furniture from './Furniture'
import FurnitureItem from '../components/FurnitureItem'
import Additem from '../components/Additem'
import Login from './Login'
import Signup from './SignUp'
import { AuthContext } from '../context/AuthContext'

function Nav() {
  const { currUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currUser ? children : <Navigate to='/login' />
  }

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          index
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/furniture' element={<Furniture />}></Route>
        <Route path='furniture/:id' element={<FurnitureItem />} />
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/additem' element={<Additem />}></Route>
      </Routes>
    </>
  )
}

export default Nav

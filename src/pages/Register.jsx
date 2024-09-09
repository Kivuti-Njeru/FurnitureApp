import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
// import { auth } from '../database/databaseConfig.jsx'

function Register() {
  const [usrname, setUsrname] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const handleSubmit = (e) => {
    e.preventdefault()
  }
  return (
    <>
      <section className='mt-5 contact_section  long_section'>
        <div className='container'>
          <div className='form_container col-md-8'>
            <div className='heading_container'>
              <h2>Register</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type='text'
                  placeholder='Enter Username'
                  value={usrname}
                  onChange={(e) => setUsrname(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type='email'
                  placeholder='Enter Email'
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type='password'
                  placeholder='Enter Password'
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>
              <div className='btn_box'>
                <button type='submit'>Register</button>
              </div>
              <div className='card-link mt-3'>
                <Link to='/login'>Already have an account ? Login</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register

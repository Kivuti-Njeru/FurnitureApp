import React, { useContext, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const { dispatch } = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault()
    const mail = emailRef.current.value
    const password = passwordRef.current.value
    const auth = getAuth()

    try {
      setError('')
      setLoading(true)
      signInWithEmailAndPassword(auth, mail, password).then(userCredential => {
        const user = userCredential.user
        dispatch({ type: 'LOGIN', payload: user })
        nav('/')
      })
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <>
      <Card
        className='mt-2'
        style={{ maxWidth: '24rem', marginInline: 'auto' }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Log In</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button
              disabled={loading}
              className='w-100 mt-4'
              type='submit'>
              Log In
            </Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  )
}

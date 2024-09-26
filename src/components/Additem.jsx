import React, { useRef, useState, useContext } from 'react'
import NavSect from './NavSect'
import { AuthContext } from '../context/AuthContext'
import { db } from '../databaseConfig'

function Additem() {
  const titleRef = useRef()
  const priceRef = useRef()
  const [image, setImage] = useState([])

  const { currUser } = useContext(AuthContext)

  const submit = e => {
    e.preventDefault()
    console.log(currUser.uid)
  }
  return (
    <>
      <NavSect />
      <section className=' mt-5 contact_section  long_section'>
        <div className='container'>
          <div className='form_container col-md-8'>
            <div className='heading_container'>
              <h2>Add Furniture</h2>
            </div>
            <form>
              <div>
                <div className='container'>
                  <img src={image} className='card-img' />
                </div>
                <input
                  type='file'
                  placeholder='Add image'
                  className='align-content-center'
                  onChange={e => {
                    setImage(e.target.files[0])
                  }}
                />
              </div>
              <div>
                <input type='text' placeholder='Add title' ref={titleRef} />
              </div>
              <div>
                <input type='price' placeholder='Enter Price' ref={priceRef} />
              </div>
              <div className='btn_box'>
                <button type='submit' onClick={submit}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Additem

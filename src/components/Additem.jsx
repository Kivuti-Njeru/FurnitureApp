import React, { useState, useContext } from 'react'
import NavSect from './NavSect'
import { AuthContext } from '../context/AuthContext'
import { db, storage } from '../databaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

function Additem() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState([])

  const { currUser } = useContext(AuthContext)
  const submit = async e => {
    e.preventDefault()
    try {
      const storageRef = ref(storage, `images/${currUser.uid}/${image.name}`)

      const snapshot = await uploadBytes(storageRef, image)
      console.log('Uploaded image')

      const downloadURL = await getDownloadURL(snapshot.ref)

      const docRef = await addDoc(collection(db, 'Furnitures'), {
        uid: currUser.uid,
        imageUrl: downloadURL,
        name: title,
        price: price,
        createdAt: new Date(),
      }).then(setTitle(''), setPrice(''), setImage([]))

      console.log('Document created with ID:', docRef.id)
    } catch (e) {
      console.error('Error uploading file or creating document:', e)
    }
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
                  onChange={e => setImage(e.target.value)}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Add title'
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Enter Price'
                  onChange={e => setPrice(e.target.value)}
                />
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

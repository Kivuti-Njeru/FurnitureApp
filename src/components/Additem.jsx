import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Additem() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(null)
  const [img, setImg] = useState([])

  const [item, setItem] = useState(() => {
    localStorage.setItem('FURNITURES', JSON.stringify(Fi))
  })

  useEffect(() => {
    localStorage.setItem('FURNITURES', JSON.stringify(item))
  }, [item])

  const b64Img = (img) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.onload = () => resolve(reader.result)
      reader.onerror = () => reject(error)
    })
  }
  const nav = useNavigate()

  function addFun(title, price, image) {
    setItem((currentitems) => {
      return [
        ...currentitems,
        { id: crypto.randomUUID(), title: title, price: price, img: image },
      ]
    })
  }
  const clearInput = () => {
    setTitle('')
    setPrice(null)
    setImg([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const image = await b64Img(img)
    console.log(item)

    // const furnitureItem = new FormData()
    // furnitureItem.append('id', crypto.randomUUID())
    // furnitureItem.append('title', title)
    // furnitureItem.append('price', price)
    // if (image !== null) {
    //   furnitureItem.append('img', image)
    // } else {
    //   alert('select an image')
    // }
    // const Fi = Object.fromEntries(furnitureItem)
    addFun(title, price, image)
    clearInput()
  }

  return (
    <>
      <section className=' mt-5 contact_section  long_section'>
        <div className='container'>
          <div className='form_container col-md-8'>
            <div className='heading_container'>
              <h2>Add Furniture</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className='container'>
                  <img
                    src={img}
                    className='card-img'
                  />
                </div>
                <input
                  type='file'
                  name='img'
                  placeholder='Add image'
                  className='align-content-center'
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='title'
                  value={title}
                  placeholder='Add title'
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  type='price'
                  name='price'
                  value={price}
                  placeholder='Enter Price'
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='btn_box'>
                <button type='submit'>Add</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Additem

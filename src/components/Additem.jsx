import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Additem() {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState([])
  const [price, setPrice] = useState('')

  const [editingIndex, setEditingIndex] = useState(null)
  const nav = useNavigate()

  const [furniture, setFurniture] = useState(() => {
    const localval = localStorage.getItem('FURNITURES')
    if (localval == null) return []
    return JSON.parse(localval)
  })

  useEffect(() => {
    localStorage.setItem('FURNITURES', JSON.stringify(furniture))
  }, [furniture])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title === '' && price === '') return addItem(title, img, price)
  }
  function addItem(title, img, price) {
    setFurniture((currentItems) => {
      return [
        ...currentItems,
        { id: crypto.randomUUID(), title: title, img: img, price: price },
      ]
    })
    // console.log(furniture)

    nav('/furniture')
  }

  const saveItem = () => {
    const updatedItems = furniture.map((item, i) => {
      if (i === editingIndex) {
        return { ...item, text: title, text: img, Number: price }
      }
      return item
    })
    setFurniture(updatedItems)
    setTitle('')
    setEditingIndex(null)
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
                <input
                  type='file'
                  placeholder='Add image'
                  // value={img}
                  className='align-content-center'
                  onChange={(e) => setImg(new FileReader(e.target.files[0]))}
                />
              </div>
              <div>
                <input
                  type='text'
                  value={title}
                  placeholder='Add title'
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  type='price'
                  value={price}
                  placeholder='Enter Price'
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='btn_box'>
                <button
                  type='submit'
                  onClick={editingIndex !== null ? saveItem : addItem}>
                  {editingIndex !== null ? 'Save' : 'Add'}
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

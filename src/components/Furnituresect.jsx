import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Furniture() {
  const [furniture, setFurniture] = useState(() => {
    const localval = localStorage.getItem('FURNITURES')
    if (localval == null) return []
    return JSON.parse(localval)
  })

  const updateItem = (index) => {
    setEditingIndex(index)
    setFurniture(furniture[index].text)
  }

  function deleteItem(id) {
    setFurniture((currentItems) => {
      return currentItems.filter((i) => i.id !== id)
    })
  }

  return (
    <>
      {/* furniture section */}

      <section className='furniture_section layout_padding'>
        <div className='container'>
          <div className='heading_container'>
            <h2>Our Furniture</h2>
            <p>
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't an
            </p>
          </div>

          <div className='row'>
            {furniture.length === 0 && 'No Todos'}
            {furniture
              ? furniture.map((i) => {
                  return (
                    <>
                      <div
                        className='col-md-6 col-lg-4'
                        key={i.id}>
                        <div className='box'>
                          <div className='img-box'>
                            <img
                              src={i.image}
                              alt={i.name}
                            />
                          </div>
                          <div className='detail-box'>
                            <h5>{i.name}</h5>
                            <div className='price_box'>
                              <h6 className='price_heading'>
                                <span>$</span>
                                {i.price}
                              </h6>
                              <Link onClick={updateItem(i)}>Update</Link>
                              <Link onClick={deleteItem(i)}>Delete</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              : null}
          </div>
        </div>
        <div className='container'>
          <div className='heading_container'>
            <Link to='/additem'>Add item</Link>
          </div>
        </div>
      </section>
      {/* end furniture section */}
    </>
  )
}

export default Furniture

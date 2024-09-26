import { Link } from 'react-router-dom'

function Furniture({ furniture }) {
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
            {furniture
              ? furniture.map(furn => {
                  return (
                    <>
                      <div className='col-md-6 col-lg-4' key={furn.id}>
                        <div className='box'>
                          <div className='img-box'>
                            <img src={furn.Image} alt={furn.Title} />
                          </div>
                          <div className='detail-box'>
                            <h5>{furn.Title}</h5>
                            <div className='price_box'>
                              <h6 className='price_heading'>
                                <span>$ </span>
                                {furn.Price}
                              </h6>
                            </div>
                            <Link to='/additem'>Update</Link>
                            <Link>Delete</Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              : 'No Furnitures'}
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

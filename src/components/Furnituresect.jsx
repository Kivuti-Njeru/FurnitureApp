<<<<<<< HEAD
import { Link, useParams } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
>>>>>>> f9e7c7e (🚀)
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../databaseConfig'
import { AuthContext } from '../context/AuthContext'
import { useEffect, useState, useContext } from 'react'

function Furniture() {
  const { currUser } = useContext(AuthContext)
  const [furnitures, setFurnitures] = useState([])
<<<<<<< HEAD
  const { id } = useParams()
=======
>>>>>>> f9e7c7e (🚀)

  useEffect(() => {
    const fetchDocuments = async () => {
      if (currUser) {
        const q = query(
          collection(db, 'Furnitures'),
          where('uid', '==', currUser.uid)
        )
        const querySnapshot = await getDocs(q)
        const docs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
        setFurnitures(docs)
      }
    }

    fetchDocuments()
  }, [currUser])
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
            {furnitures
              ? furnitures.map(furniture => {
                  return (
                    <>
                      <div className='col-md-6 col-lg-4' key={furniture.id}>
                        <div className='box'>
                          <div className='img-box'>
                            <img
                              src={furniture.data.imageUrl}
                              alt={furniture.data.name}
                            />
                          </div>
                          <div className='detail-box'>
                            <h5>{furniture.data.name}</h5>
                            <div className='price_box'>
                              <h6 className='price_heading'>
<<<<<<< HEAD
                                <span>Ksh</span>
                                {furniture.data.price}
                              </h6>
                              <Link to={'/furniture' + furniture.id}>
                                view item
                              </Link>
                            </div>
=======
                                <span>$ </span>
                                {furniture.data.price}
                              </h6>
                            </div>
                            <Link to='/additem'>Update</Link>
                            <Link>Delete</Link>
>>>>>>> f9e7c7e (🚀)
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              : 'No Furnitures'}
          </div>
        </div>
<<<<<<< HEAD
        <div className='container mt-4'>
=======
        <div className='container'>
>>>>>>> f9e7c7e (🚀)
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

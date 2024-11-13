import React from 'react'

function Furniture() {
  const { currUser } = useContext(AuthContext)
  const [furniture, setFurniture] = useState([])
  const { id } = useParams()

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
        setFurniture(docs)
      }
    }

    fetchDocuments()
  }, [currUser])

  const deleteFurniture = async id => {}

  return (
    <>
      <div className='col-md-6 col-lg-4' key={furniture.id}>
        <div className='heading_container'>
          <h2>furniture.data.name</h2>
        </div>
        <hr />
        <div className='box'>
          <div className='img-box'>
            <img src={furniture.data.imageUrl} alt={furniture.data.name} />
          </div>
          <div className='detail-box'>
            <h5>{furniture.data.name}</h5>
            <div className='price_box'>
              <h6 className='price_heading'>
                <span>$ </span>
                {furniture.data.price}
              </h6>
              <div className='container'>
                <Link className='btn btn-outline-primary mr-2'>Update</Link>
                <Link
                  className='btn btn-danger'
                  onClick={() => deleteFurniture(furniture.id)}>
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Furniture

import React from 'react'
import Footer from '../components/Footer'

function Blog() {
  return (
    <>
      <NavSect />

      {/* blog section */}
      <section className='blog_section layout_padding'>
        <div className='container'>
          <div className='heading_container'>
            <h2>Latest Blog</h2>
          </div>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mx-auto'>
              <div className='box'>
                <div className='img-box'>
                  <img src='images/b1.jpg' />
                </div>
                <div className='detail-box'>
                  <h5>Look even slightly believable. If you are</h5>
                  <p>
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <a href>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mx-auto'>
              <div className='box'>
                <div className='img-box'>
                  <img src='images/b2.jpg' />
                </div>
                <div className='detail-box'>
                  <h5>Anything embarrassing hidden in the middle</h5>
                  <p>
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <a href>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mx-auto'>
              <div className='box'>
                <div className='img-box'>
                  <img src='images/b3.jpg' />
                </div>
                <div className='detail-box'>
                  <h5>Molestias magni natus dolores odio commodi. Quaerat!</h5>
                  <p>
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <a href='#'>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end blog section */}
      <Footer />
    </>
  )
}

export default Blog

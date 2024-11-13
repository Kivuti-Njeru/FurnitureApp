import React from 'react'

function Aboutsect() {
  return (
    <>
      {/* about section */}
      <section className='about_section layout_padding long_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='img-box'>
                <img src='images/about-img.png' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='detail-box'>
                <div className='heading_container'>
                  <h2>About Us</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti dolorem eum consequuntur ipsam repellat dolor soluta
                  aliquid laborum, eius odit consectetur vel quasi in quidem,
                  eveniet ab est corporis tempore.
                </p>
                <a href='#'>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
    </>
  )
}

export default Aboutsect

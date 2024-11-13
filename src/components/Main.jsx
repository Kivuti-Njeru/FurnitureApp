export default function Main() {
  return (
    <>
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
                  <a href>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end blog section */}
      {/* client section */}
      <section className='client_section layout_padding-bottom'>
        <div className='container'>
          <div className='heading_container'>
            <h2>Testimonial</h2>
          </div>
          <div
            id='carouselExample2Controls'
            className='carousel slide'
            data-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='row'>
                  <div className='col-md-11 col-lg-10 mx-auto'>
                    <div className='box'>
                      <div className='img-box'>
                        <img src='images/client.jpg' />
                      </div>
                      <div className='detail-box'>
                        <div className='name'>
                          <i className='fa fa-quote-left' aria-hidden='true' />
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row'>
                  <div className='col-md-11 col-lg-10 mx-auto'>
                    <div className='box'>
                      <div className='img-box'>
                        <img src='images/client.jpg' />
                      </div>
                      <div className='detail-box'>
                        <div className='name'>
                          <i className='fa fa-quote-left' aria-hidden='true' />
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row'>
                  <div className='col-md-11 col-lg-10 mx-auto'>
                    <div className='box'>
                      <div className='img-box'>
                        <img src='images/client.jpg' />
                      </div>
                      <div className='detail-box'>
                        <div className='name'>
                          <i className='fa fa-quote-left' aria-hidden='true' />
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel_btn-container'>
              <a
                className='carousel-control-prev'
                href='#carouselExample2Controls'
                role='button'
                data-slide='prev'>
                <i className='fa fa-long-arrow-left' aria-hidden='true' />
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExample2Controls'
                role='button'
                data-slide='next'>
                <i className='fa fa-long-arrow-right' aria-hidden='true' />
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}
      {/* contact section */}
      <section className='contact_section  long_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form_container'>
                <div className='heading_container'>
                  <h2>Contact Us</h2>
                </div>
                <form action>
                  <div>
                    <input type='text' placeholder='Your Name' />
                  </div>
                  <div>
                    <input type='text' placeholder='Phone Number' />
                  </div>
                  <div>
                    <input type='email' placeholder='Email' />
                  </div>
                  <div>
                    <input
                      type='text'
                      className='message-box'
                      placeholder='Message'
                    />
                  </div>
                  <div className='btn_box'>
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='map_container'>
                <div className='map'>
                  <div id='googleMap' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
    </>
  )
}

//  import { Link } from "react-router-dom"

import NavSect from './NavSect'

export default function Hero() {
  return (
    <>
      <div className='hero_area'>
        {/* slider section */}
        <section className='slider_section long_section'>
          <div
            id='customCarousel'
            className='carousel slide'
            data-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='container '>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='detail-box'>
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div className='btn-box'>
                          <a href='#' className='btn1'>
                            Contact Us
                          </a>
                          <a href='#' className='btn2'>
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-7'>
                      <div className='img-box'>
                        <img src='images/slider-img.png' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='container '>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='detail-box'>
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div className='btn-box'>
                          <a href className='btn1'>
                            Contact Us
                          </a>
                          <a href className='btn2'>
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-7'>
                      <div className='img-box'>
                        <img src='images/slider-img.png' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='container '>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='detail-box'>
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div className='btn-box'>
                          <a href className='btn1'>
                            Contact Us
                          </a>
                          <a href className='btn2'>
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-7'>
                      <div className='img-box'>
                        <img src='images/slider-img.png' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className='carousel-indicators'>
              <li
                data-target='#customCarousel'
                data-slide-to={0}
                className='active'
              />
              <li data-target='#customCarousel' data-slide-to={1} />
              <li data-target='#customCarousel' data-slide-to={2} />
            </ol>
          </div>
        </section>
        {/* end slider section */}
      </div>
    </>
  )
}

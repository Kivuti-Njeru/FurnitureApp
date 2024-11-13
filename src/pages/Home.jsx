import React from 'react'
import Hero from '../components/Hero'
import Aboutsect from '../components/Aboutsect'
import Furnituresect from '../components/Furnituresect'
import Main from '../components/Main'
import Footer from '../components/Footer'
import NavSect from '../components/NavSect'

function Home() {
  return (
    <>
      <NavSect />
      <Hero />
      <Aboutsect />
      <Furnituresect />
      <Main />
      <Footer />
    </>
  )
}

export default Home

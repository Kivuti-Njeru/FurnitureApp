<<<<<<< HEAD
import React from 'react'
import Furnituresect from '../components/Furnituresect'
import Footer from '../components/Footer'
import NavSect from '../components/NavSect'

function Furniture() {
  return (
    <>
      <NavSect />
      <Furnituresect />
      <Footer />
    </>
  )
}

export default Furniture
=======
import React from "react";
import Furnituresect from "../components/Furnituresect";
import Footer from "../components/Footer";
import NavSect from "../components/NavSect";

function Furniture({ furniture }) {
  return (
    <>
      <NavSect />
      <Furnituresect furniture={furniture} />
      <Footer />
    </>
  );
}

export default Furniture;
>>>>>>> f9e7c7e (🚀)

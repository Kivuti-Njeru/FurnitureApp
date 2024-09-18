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

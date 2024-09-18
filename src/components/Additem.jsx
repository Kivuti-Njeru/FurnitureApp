import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavSect from "./NavSect";

function Additem({
  addFun,
  handleImage,
  title,
  setTitle,
  price,
  setPrice,
  image,
}) {
  const submit = () => {
    e.preventDefault();
    if (title && price && image === "") return;
    addFun(title, price, image);
    setTitle("");
    setPrice("");
    setImage("");
  };
  return (
    <>
      <NavSect />
      <section className=" mt-5 contact_section  long_section">
        <div className="container">
          <div className="form_container col-md-8">
            <div className="heading_container">
              <h2>Add Furniture</h2>
            </div>
            <form onSubmit={submit}>
              <div>
                <div className="container">
                  <img src={image} className="card-img" />
                </div>
                <input
                  type="file"
                  placeholder="Add image"
                  className="align-content-center"
                  onChange={handleImage}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={title}
                  placeholder="Add title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="price"
                  value={price}
                  placeholder="Enter Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="btn_box">
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Additem;

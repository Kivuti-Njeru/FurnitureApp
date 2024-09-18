import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavSect from "./NavSect";

function Additem() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();
  // Load items from local storage when component mounts
  useEffect(() => {
    const savedItems = localStorage.getItem("FURNITURES");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Save items to local storage whenever items change
  useEffect(() => {
    localStorage.setItem("FURNITURES", JSON.stringify(items));
  }, [items]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const submit = async (e) => {
    e.preventDefault();

    const furniture = {
      id: crypto.randomUUID(),
      Image: image,
      Title: title,
      Price: price,
    };
    setItems([...items, furniture]);
    console.log(furniture);
    setImage("");
    setTitle("");
    setPrice("");

    setTimeout(() => {
      nav("/furniture");
    }, 1000);
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

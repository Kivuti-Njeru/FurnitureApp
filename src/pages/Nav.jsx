import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Furniture from "./Furniture";
import Additem from "../components/Additem";
// import Register from "./Register";
import Login from "./Login";
import Signup from "./SignUp";

function Nav() {
  // Load items from local storage when component mounts
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [furniture, setFurniture] = useState(() => {
    const savedItems = localStorage.getItem("FURNITURES");
    if (savedItems == null) return [];
    return JSON.parse(savedItems);
  });

  // Save items to local storage whenever items change
  useEffect(() => {
    localStorage.setItem("FURNITURES", JSON.stringify(furniture));
  }, [furniture]);

  const addFun = (title, image, price) => {
    setFurniture((curr) => {
      return [
        ...curr,
        {
          id: crypto.randomUUID(),
          Title: title,
          Image: image,
          Price: price,
        },
      ];
    });
  };
  const nav = useNavigate();

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

  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/furniture"
          element={<Furniture furniture={furniture} />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/additem"
          element={
            <Additem
              addFun={addFun}
              handleImage={handleImage}
              title={title}
              setTitle={setTitle}
              price={price}
              setPrice={setPrice}
              image={image}
              setImage={setImage}
            />
          }></Route>
      </Routes>
    </>
  );
}

export default Nav;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Edit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState("");

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/product/${id}`)
.then(res =>{
    console.log(res.data);
    setTitle(res.data.title)
    setPrice(res.data.price)
    setDescription(res.data.description)
})
.catch(err =>{
    console.log("❌❌", err);
    nav("/", {replace: true})
})
}, [])

  const handleInput = (e) => {
    e.preventDefault();
    const updatedProduct = {
      title,
      price,
      description,
    };
    axios.put(`http://localhost:8000/api/product/edit/${id}`, updatedProduct)
      .then((res) => console.log("✅ SUCCESS from SERVER", res.data))
      .catch((err) => console.log("❌ ERROR from server", err));

    nav("/search")
  };
  return (
    <div>
      <form onSubmit={handleInput}>
        Title:
        <input onChange={(e) => {   setTitle(e.target.value); }} value={title}/>
        Price:
        <input onChange={(e) => {setPrice(e.target.value);}}value={price}/>
        Description:
        <input onChange={(e) => {setDescription(e.target.value);}}value={description}/>
        <button>ADD Product</button>
      </form>
    </div>
  );
};

export default Edit;

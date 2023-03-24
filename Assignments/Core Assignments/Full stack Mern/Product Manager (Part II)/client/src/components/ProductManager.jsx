import React from 'react'
import {useState} from 'react';
import axios from "axios";
const ProductManager = (props) => {
  const [title, setTitle]=useState('')
  const [price, setPrice]=useState('')
  const [description, setDescription]=useState('')
 
  const handleInput = (e) =>{
    e.preventDefault()
    const newproduct = {
      title,
      price,
      description
    }
    setTitle('')
    setPrice('')
    setDescription("")
    axios.post("http://localhost:8000/api/products/new", newproduct)
    .then(res=> console.log("✅ SUCCESS from SERVER", res.data))
    .catch(err => console.log("❌ ERROR from server", err))
  }
  return (
    <div>
      <form onSubmit={handleInput}>
        Title: <input onChange={(e)=>{setTitle(e.target.value)}}  value={title} />
        Price: <input onChange={(e)=>{setPrice(e.target.value)}} value={price} />
        Description: <input onChange={(e)=>{setDescription(e.target.value)}} value={description} />
        <button>ADD Product</button>
      </form>
    </div>
  )
}

export default ProductManager
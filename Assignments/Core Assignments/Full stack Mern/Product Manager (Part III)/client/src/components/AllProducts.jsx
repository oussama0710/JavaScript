import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const AllProducts = (props) => {
    const nav = useNavigate()
    const [products, setProducts]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
    .then(res =>{
        console.log(res.data);
        setProducts(res.data)
    })
    .catch(err =>{
        console.log("❌❌", err);
        nav("/", {replace: true})
    })
}, [])
const deleteProduct=(id) =>{
    axios.delete(`http://127.0.0.1:8000/api/product/${id}/delete`)
    .then(res=>{
            console.log("Note deleted ✅✅",res.data)
            setProducts(products.filter((product)=>product._id!==id))
    })
    .catch(err=>console.log(err))
}
  return (
    <div>
        <h1>ALL Products</h1>
        {products.map((value)=>{
        return(
        <div>
        <p onClick={(e)=>{nav(`/${value._id}`)}} key={value._id}>{value.title}</p>
        <button onClick={()=>{nav(`/${value._id}/edit`)}}> EDIT </button>
        <button onClick={()=>{deleteProduct(value._id)}}> DELETE </button>
        </div>
        )})}
    </div>
  )
}

export default AllProducts
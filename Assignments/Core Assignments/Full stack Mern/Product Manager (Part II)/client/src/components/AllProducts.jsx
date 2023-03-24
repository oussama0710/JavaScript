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
  return (
    <div>
        <h1>ALL Products</h1>
        {products.map((value)=><p onClick={(e)=>{nav(`/${value._id}`)}} key={value._id}>{value.title}</p>)}
    </div>
  )
}

export default AllProducts
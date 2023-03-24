import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const OneProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct]= useState("")
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("❌❌", err);
      });
  }, []);
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};
export default OneProduct;

import './App.css';
import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import ProductManager from './components/ProductManager';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
function App() {
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductManager />} />
        <Route path="/search" element={<AllProducts />} />
        <Route path="/:id" element={<OneProduct />} />
      </Routes>
    </div>
  );
}

export default App;

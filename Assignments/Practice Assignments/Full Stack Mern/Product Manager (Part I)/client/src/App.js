import './App.css';
import React ,{useState} from 'react';
import axios from "axios";
function App() {
  const [title, seTitle]=useState('')
  const [price, setPrice]=useState(0)
  const [description, setDescription]=useState('')
 
  const handleInput = (e) =>{
    e.preventDefault()
    const newproduct = {
      title,
      price,
      description
    }
    axios.post("http://localhost:8000/api/products/new", newproduct)
    .then(res=> console.log("✅ SUCCESS from SERVER", res.data))
    .catch(err => console.log("❌ ERROR from server", err))
  }
  return (
    <div className="App">
      <form onSubmit={handleInput}>
        Title: <input onChange={(e)=>{seTitle(e.target.value)}} />
        Price: <input onChange={(e)=>{setPrice(e.target.value)}} />
        Description: <input onChange={(e)=>{setDescription(e.target.value)}} />
        <button>ADD Product</button>
      </form>
    </div>
  );
}

export default App;

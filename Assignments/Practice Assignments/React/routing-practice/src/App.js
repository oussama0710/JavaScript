import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Numb from './components/Numb';
import ColorNumb from './components/ColorNumb';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:id" element={<Numb/>} />
      <Route path="/:word/:color/:backColor" element={<ColorNumb/>} />
      </Routes>
    </div>
  );
}

export default App;

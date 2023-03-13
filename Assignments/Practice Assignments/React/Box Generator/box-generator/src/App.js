import './App.css';
import { useState } from 'react'
import AddBoxes from './components/addBoxes';
import Displayboxes from './components/Displayboxes';


function App() {
  const [boxes, setBoxes ]= useState([
    {color: "red"},
    {color: "blue"},
    {color: "purple"}
  ]);
  return (
    <div className="App">
      <AddBoxes boxes={boxes} setBoxes={setBoxes}/>
      <Displayboxes className="Boxes" boxes={boxes} setBoxes={setBoxes}/>
      
    </div>
  );
}

export default App;

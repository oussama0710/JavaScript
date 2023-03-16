import './App.css';
import {Routes, Route } from "react-router-dom";
import Fetch from './components/Fetch';
import Planets from './components/Planets';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <Fetch />
      <Routes>
        <Route path="/people/:peopleId" element={<People/>} />
        <Route path="/planets/:planetsId" element={<Planets/>} />
      </Routes>
    </div>
  );
}

export default App;

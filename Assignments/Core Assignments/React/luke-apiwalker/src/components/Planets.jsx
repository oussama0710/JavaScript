import React, {useState, useEffect}  from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
const Planets = (props) => {
    const {planetsId} = useParams();
    const [responseData2, setResponseData2] = useState('');
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${planetsId}/?format=json`)
            .then(response=>{setResponseData2(response.data)})
    }, [planetsId]); 
  return (
    <div>
        <h2>{responseData2.name} </h2>
        <p>Climate {responseData2.climate}</p>
        <p>Terrain {responseData2.terrain}</p>
        <p>Surface Water: {responseData2.surface_water}</p>
        <p>Population: {responseData2.population}</p>
    </div>
  )
}

export default Planets
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom'
const People = (props) => {
    const [responseData, setResponseData] = useState('');
    const {peopleId} = useParams();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${peopleId}/?format=json`)
            .then(response=>{setResponseData(response.data)})
            .catch(err => {console.log("check please",err);})
    }, [peopleId]); 
  return (
    <div>
        <h1>{responseData.name}</h1>
        <p>Height: {responseData.height} cm</p>
        <p>Mass: {responseData.mass} kg</p>
        <p>Hair Color: {responseData.hair_color}</p>
        <p>Skin Color: {responseData.skin_color}</p>
    </div>
  )
}

export default People
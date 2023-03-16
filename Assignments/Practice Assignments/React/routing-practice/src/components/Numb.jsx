import React from 'react'
import { useParams } from 'react-router-dom'

const Numb = () => {
    const {id} = useParams();
  return (
    <div>
      {isNaN(id)? <h1>enter only a number</h1>: <h1>Your number is {id}</h1> }
    </div>
  )
}

export default Numb
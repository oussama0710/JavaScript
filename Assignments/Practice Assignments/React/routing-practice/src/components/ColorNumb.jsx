import React from 'react'
import { useParams } from 'react-router-dom'

const ColorNumb = () => {
    const {word} = useParams();
    const {color} = useParams();
    const {backColor} = useParams();
    const styles =  {item:{
        backgroundColor:backColor,
        color:color,
    }}
  return (
    <div>
    <h1 style={styles.item}>Your number is {word}</h1>
    </div>
  )
}

export default ColorNumb
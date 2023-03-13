import React, { useState } from 'react'

function Displayboxes(props) {
  
  return (
    <div style={{display:"flex", 
                justifyContent: "space-evenly"}}>
        {props.boxes.map((box,index)=>{
        return (<tr><td key={index} style={{

          backgroundColor:box.color,
          width: "100px",
          height:"100px"
        }}></td></tr>)})}
       </div>
  )
}

export default Displayboxes
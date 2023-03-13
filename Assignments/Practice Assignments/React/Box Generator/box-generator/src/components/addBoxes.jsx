import React, {useState} from 'react'

const AddBoxes = (props) => {

    const [color,setBoxColor]= useState("")
    console.log(props.boxes);
    const submitInputs = (e) =>{
        e.preventDefault()
        const newBox = {
            color
        }
        const copyBox = [...props.boxes]
        console.log(props.boxes);
        copyBox.push(newBox)
        props.setBoxes(copyBox)
        console.log(copyBox);
        setBoxColor("")
    }
  return (
    <form onSubmit={(e)=>{submitInputs(e)}}>
        <label htmlFor="">Color</label>
        <input onChange={(e)=>{setBoxColor(e.target.value)}} type="text" value={color}/>
        <button>Add</button>

    </form>
  )
}

export default AddBoxes
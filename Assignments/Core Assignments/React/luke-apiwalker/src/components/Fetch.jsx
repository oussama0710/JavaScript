import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'

const Fetch = (props) => {
    const nav = useNavigate();
    const [nature,setNature]= useState('')
    const [id,setId]= useState('');
    const Search = (e)=>{
        e.preventDefault();
        nav(`/${nature}/${id}`)
    }
  return (
    <div>
        <form onSubmit={(e)=>{Search(e)}}>
        <select onChange={(e)=>{setNature(e.target.value)}}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
        </select>
        <input onChange={(e)=>{setId(e.target.value)}} type="text" />
        <button>Search</button>
        </form>
    </div>
  )
}

export default Fetch
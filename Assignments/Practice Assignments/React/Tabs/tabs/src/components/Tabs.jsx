import React, {useState} from 'react'

const Tabs=(props)=> {
    const [tab1, setTab1] = useState("")
    const [tab2, setTab2] = useState("")
    const [tab3, setTab3] = useState("")

    const showTab1 = (e)=>{
        e.preventDefault()
        setTab1("this is Tab 1")
        setTab2()
        setTab3()
    }
    const showTab2 = (e)=>{
        e.preventDefault()
        setTab2("this is Tab 2")
        setTab1()
        setTab3()
    }
    const showTab3 = (e)=>{
        e.preventDefault()
        setTab3("this is Tab 3")
        setTab1()
        setTab2()
    }
  return (
    <div>
        <div style={{display:"flex"}}>
            <button onClick={(e)=>{showTab1(e)}}>Tab 1</button>
            <button onClick={(e)=>{showTab2(e)}}>Tab 2</button>
            <button onClick={(e)=>{showTab3(e)}}>Tab 3</button>
        </div>
        <div >
        <p>{tab1}</p>
        <p>{tab2}</p>
        <p>{tab3}</p>
        </div>
    </div>
  )
}

export default Tabs
import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value,setValue]=useState("")

    const addItem=()=>{
        addTask(value)
        setValue("")
    }

  return (
    <>
     <div className='input-container'>
        <input 
        className='input'
        placeholder='Add Task'
        type="text" 
        value={value}
        onChange={(e)=>{
            setValue(e.target.value)
        }}
        required
        />
        <button onClick={addItem} className='add-btn'>Add</button>
     </div>
    </>
  )
}

export default AddTask

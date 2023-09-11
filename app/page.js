"use client"
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    setMainTask([...mainTask,{ title,desc }])
    e.preventDefault();
    settitle("");
    setdesc("");
  };
  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }


  let renderTask = <h2>No Task Available</h2>
 if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
     
    return( 
    <li key={i}>
      <div className='flex justify-between mb-5 w-2/3'>
        <h5>{t.title}</h5>
        <h6>{t.desc}</h6>
    <button className="bg-red-400 text-white px-4 py-2 rounded font-bold"
    onClick={()=>{
      deleteHandler(i)
      }}>Delete</button>
     </div>
      </li>

    )
  })
 }
  return (
    <>
      <h1 className='bg-black text-white text-5xl text-center'>My To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder="Enter the task" value={title} 
        onChange={(e)=>{settitle(e.target.value)}}/> 

        <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder="Enter Description" value={desc} 
         onChange={(e)=>{setdesc(e.target.value)}}
         />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'
       >Add Task</button>  
      </form>    
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  return (
    <div className='w-full h-screen duration-200 ' 
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>{setColor("red")}} className='bg-red-700 outline-none px-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>{setColor("green")}} className='bg-red-700 outline-none px-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>{setColor("blue")}} className='bg-red-700 outline-none px-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>{setColor("olive")}} className='bg-red-700 outline-none px-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>
        
        </div>
      </div>
    </div>
  )
}

export default App

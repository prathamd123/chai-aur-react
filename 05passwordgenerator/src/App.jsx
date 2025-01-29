import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
    },
    [password],)
  

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<= length;i++){
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [length,numberAllowed,charAllowed,setPassword])

  useEffect(() => {
   passwordGenerator() 
  }, [length,numberAllowed,charAllowed,passwordGenerator])
  

  return (
    <>
   <h1 className='text-4xl text-white text-center mt-12'>Password Generator</h1>
   <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 bg-gray-800'>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='my-8 w-full py-4 px-5 rounded bg-white outline-none'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipBoard}
      className='bg-emerald-600 my-8 mr-5 p-4 rounded-lg cursor-pointer hover:bg-emerald-700 duration:200'>Copy</button>
    </div>
    <div className='flex text-sm text-white gap-x-2 py-3 my-6'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox" 
      id="numberInput"
      defaultChecked={numberAllowed} 
      onChange={()=>{
        setNumberAllowed((prev) => !prev)
      }}
      />
      <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox" 
      id="charInput"
      defaultChecked={charAllowed} 
      onChange={()=>{
        setCharAllowed((prev) => !prev)
      }}
      />
      <label htmlFor='charInput'>Characters</label>
      </div>
    </div>
   </div>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  // let counter = 1;

  const increaseCounter = () => {
    if(counter < 20 && counter >= 0){
      counter = counter+1
      setCounter(counter)
    }
  }
  
  const decreaseCounter = ()=>{
    if(counter<=20 && counter>=1 ){
    counter = counter-1
    setCounter(counter)
    // console.log(counter)
    }
  }


  return (
   <>
   <h1>Counter : {counter}</h1>
   <button onClick={increaseCounter}>Increase : {counter}</button>
   <button onClick={decreaseCounter}>decrease : {counter}</button>
   </>
  )
}

export default App

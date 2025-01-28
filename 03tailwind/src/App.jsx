import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex gap-3 justify-center'>
     <Card username="user 1" item="#345" price="$25"/>
     <Card username="user 2" item="#346" price="$65"/>
     <Card username="user 3" item="#347" price="$48"/>
    </div>
    </>
  )
}

export default App

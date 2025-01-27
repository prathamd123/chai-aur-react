import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-dev-runtime.js"

function MyApp(){
  return(
    <div>
      <h1>Customm react ! || chai</h1>
    </div>
  )
}

// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to react'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const user = 'pratham'
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google',
  user
)

createRoot(document.getElementById('root')).render(
  // reactElement
  // <StrictMode>
    <App />
    // MyApp()
    // anotherElement
  // </StrictMode>,
)

import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [Username, setUsername] = useState("")    
    const [password, setPassword] = useState("")    
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        setUser({Username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input
      value={Username}
      onChange={(e) => setUsername(e.target.value)}
      type="text" placeholder='Username' />
      <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="Password" placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

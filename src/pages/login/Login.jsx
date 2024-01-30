import React from 'react'
import './Login.css'
import { FaTimes } from "react-icons/fa";

function Login({login, setLogin, setUser, user, setName}) {
  const addName = ()=>{
    setName(user)
  }
  return (
    <div className={login ? 'login active' : 'login'}>
      <div className="exit_btn" onClick={()=>{
        setLogin(false)
      }}>
        <FaTimes />
      </div>
      <div className="container">
        <div className='form' action="">
          <h3>Username</h3>
          <input type="text" placeholder='Login' onChange={(e)=>{
            setUser(e.target.value)
          }} />
          <h3>Password</h3>
          <input type="password" placeholder='Enter your password' />
          <button onClick={()=>{
            addName()
          }}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
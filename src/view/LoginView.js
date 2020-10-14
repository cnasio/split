import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../shared/design/LoginView.css'

export const LoginView = () => {
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState()
  const [loginPassword, setLoginPassword] = useState()

  const loginHandler = () => {
    localStorage.setItem('email', loginEmail)
    console.log(`${loginEmail} has logged in.`)
    history.push('/home')
  }

  return (
    <div id="login_view">
      <h1>Login:</h1>
      <br/>
      <span>Email:</span>
      <input onChange={e => setLoginEmail(e.target.value)}></input><br/>
      <span>Password:</span>
      <input onChange={e => setLoginPassword(e.target.value)}></input><br/><br/>
      <button onClick={() => loginHandler()}>Login</button>
    </div>
  )
}

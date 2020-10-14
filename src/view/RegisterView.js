import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../shared/design/RegisterView.css'

export const RegisterView = () => {
  const history = useHistory();
  const [registerEmail, setRegisterEmail] = useState()
  const [registerPassword, setRegisterPassword] = useState()

  const registerHandler = () => {
    console.log(`${registerEmail} has registered.`)
    history.push('/home')
  }

  return (
    <div id="register_view">
      <h1>Register:</h1>
      <br/>
      <span>Email:</span>
      <input onChange={e => setRegisterEmail(e.target.value)}></input><br/>
      <span>Password:</span>
      <input onChange={e => setRegisterPassword(e.target.value)}></input><br/><br/>
      <button onClick={() => registerHandler()}>Register</button>
    </div>
  )
}

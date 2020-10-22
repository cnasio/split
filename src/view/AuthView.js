import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import Card from '../components/UIElements/Card/Card'
import Input from '../components/FormElements/Input/Input'
import Button from '../components/FormElements/Button/Button'
import { UserContext } from '../shared/context/UserContext'

const AuthView = () => {

  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Niklas Hilmersson",
      email: 'cnas@split.com',
      password: 'testing',
      image: 'https://www.thispersondoesnotexist.com/image',
    },
    {
      id: "u2",
      name: "Hilmer Löjligt Långt Namn Niklasson",
      email: 'cnas2@split.com',
      password: 'testing2',
      image: 'https://www.thispersondoesnotexist.com/image',
    },
    {
      id: "u3",
      name: "George Costanza",
      email: 'user@split.com',
      password: 'password',
      image: 'https://www.thispersondoesnotexist.com/image',
    },
    
  ];

  const history = useHistory();

  const [isLoginMode, setIsLoginMode] = useState(true)
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputName, setInputName] = useState('')
  const [, setCurrentUser] = useContext(UserContext)

  // Dummy-login tills DB och Backend är på plats
  // TODO: Show friendsbar if successful login
  const submitHandler = () => {

    const existingUser = DUMMY_USERS.filter(user => user.email === inputEmail)

    if(isLoginMode) {
      if(existingUser && existingUser[0].password === inputPassword) {
        setCurrentUser(existingUser[0])
         localStorage.setItem('DUMMY_email', existingUser[0].email)
         history.push('/home')
      } else {
        alert('Email or password incorrect. Please try again.')
      }
    } else {
      console.log(`[PH]: Registered ${inputName}, Email: ${inputEmail}, Password: ${inputPassword}`)
    }
  }

  return (
    <div id='view'>
      <Card className='view__card'>
        <h2>{isLoginMode ? 'Login' : 'Sign up'}</h2>
        <hr/>
        <form onSubmit={() => submitHandler()}>
          {!isLoginMode && (
            <Input id='name' element="input" type="name" placeholder="Name" label="Name" onChange={e => setInputName(e.target.value)} />
          )}

          <Input id='email' element="input" type="email" placeholder="abc@split.com" label="E-mail" onChange={e => setInputEmail(e.target.value)} />
          
          <Input id='password' element="input" type="password" label="Password" onChange={e => setInputPassword(e.target.value)} />
          <br />
          <Button type="submit">{isLoginMode ? "LOGIN" : "SIGN UP"}</Button>
        </form>
          <Button inverse onClick={() => setIsLoginMode(prevMode => !prevMode)}>CHANGE TO {isLoginMode ? "SIGN UP" : "LOGIN"}</Button>

      </Card>
    </div>
  )
}

export default AuthView;

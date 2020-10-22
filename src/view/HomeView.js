import React, { useState } from 'react'
import service from '../shared/api/service/service'

import Card from '../components/UIElements/Card/Card'
import Button from '../components/FormElements/Button/Button'


const HomeView = () => {

  const [character, setCharacter] = useState()

  const retrieveCharacterFromExternalApi = () => {
    service
      .getRandomStarWarsCharacter()
      .then(response => {
        setCharacter(response.data.name)
      })
  }

  return (
    <div id='view'>
      <Card className='view__card'>
        <h3>HomeView</h3><hr />
        <p>Testlogin:</p>
        <p>User: user@split.com</p>
        <p>Password: password</p>
        <Button  onClick={() => retrieveCharacterFromExternalApi()}>MAKE API CALL</Button>
        <p>{character ? character : ''}</p>
      </Card>
    </div>
  )
}

export default HomeView;
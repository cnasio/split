import React, { useContext, useState } from 'react'
import service from '../shared/api/service/service'

import Card from '../components/UIElements/Card/Card'
import Button from '../components/FormElements/Button/Button'
import { UserContext } from '../shared/context/UserContext'
import '../shared/design/HomeView.css'


const HomeView = () => {

  const [character, setCharacter] = useState()
  const [currentUser, setCurrentUser] = useContext(UserContext)

  const retrieveCharacterFromExternalApi = () => {
    service
      .getRandomStarWarsCharacter()
      .then(response => {
        setCharacter(response.data.name)
      })
  }

  return (
    <>
      <Card className="home_view">
        <Button  onClick={() => retrieveCharacterFromExternalApi()}>MAKE API CALL</Button>
        <p>HomeView</p>
        <p>Currently logged in user: {currentUser.name}</p>
        <p>{character ? character : ''}</p>
      </Card>
    </>
  )
}

export default HomeView;
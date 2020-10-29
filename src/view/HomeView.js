import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import service from '../shared/api/service/service'

import SearchBar from '../components/Navigation/Header/SearchBar/SearchBar'
import Card from '../components/UIElements/Card/Card'
import Button from '../components/FormElements/Button/Button'


const HomeView = () => {

  const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key='
  const API_KEY = '98a09800-f82c-4e2d-a934-4342b4d9f860'

  const [loading, setLoading] = useState()
  const [character, setCharacter] = useState()
  const [pokemon, setPokemon] = useState()
  const [search, setSearch] = useState()
  const [recipe, setRecipe] = useState()
  const [number, setNumber] = useState()


  const retrieveCharacterFromExternalApi = () => {
    service
      .getRandomStarWarsCharacter()
      .then(response => {
        setCharacter(response.data)
      })
  }

  const fetchDataFromPokemonApi = e => {
    e.preventDefault();

    Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((res) => setPokemon(res.data))
    .catch((err) => console.log(err))
  }
 
  const getDataFromFoodApi = async e => {
    try {
      e.preventDefault();
      const res = await Axios.get(API_URL + API_KEY)
      // const res = await service.getPizzaFromForkifyAPI()
      setRecipe(res.data.data.recipes[number])
      setLoading(false)
    } catch(err) {
      console.log(err)
    }
  }

  const displayData = () => <p>{recipe && recipe.title}</p>

  const showData = () => {
    return loading ? <p>Loading</p> : displayData()
  }

  useEffect(() => {
    getDataFromFoodApi()
  }, [recipe])

  return (
    <div id='view'>

      <Card className='view__card'>
        <h3>HomeView</h3><hr />
        <p>Testlogin:</p>
        <p>User: user@split.com</p>
        <p>Password: password</p>
      </Card>

      <Card className='view__card'>
        <Button  onClick={() => retrieveCharacterFromExternalApi()}>STAR WARS API CALL</Button>
        <p>{character && `Name: ${character.name}`}</p>
      </Card>

      <Card className='view__card'>
        <form onSubmit={fetchDataFromPokemonApi}>
          <SearchBar type="text" placeholder="Search Pokemon..." onChange={(e) => setSearch(e.target.value)} />
          <Button  onClick={fetchDataFromPokemonApi}>POKEMON API CALL</Button>
        </form>
        <p>{pokemon && pokemon.name && `Name: ${pokemon.name}`}</p>
        <p>{pokemon && pokemon.id && `ID: ${pokemon.id}`}</p>
        <p>{pokemon && pokemon.height && `Height: ${pokemon.height}`}</p>
        <p>{pokemon && pokemon.weight && `Weight: ${pokemon.weight}`}</p>
      </Card>

      <Card className='view__card'>
        <h1>Recipe API Call</h1>
        <form onSubmit={getDataFromFoodApi}>
          <SearchBar type="number" placeholder="Choose 0-58" onChange={(e) => setNumber(e.target.value)} />
          <Button onClick={getDataFromFoodApi}>Recipe API Call</Button>
        </form>
        {showData()}
      </Card>

    </div>
  )
}

export default HomeView;
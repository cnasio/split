import axios from 'axios'

// const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key='
// const API_KEY = '98a09800-f82c-4e2d-a934-4342b4d9f860'


const instance = axios.create({
  baseURL: 'https://swapi.dev/api'
  
})

// const ForkifyAPI = axios.create({
//   baseURL: (API_URL + API_KEY)
// })

export default instance;
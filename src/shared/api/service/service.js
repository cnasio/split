import http from '../api';

const getRandomStarWarsCharacter = () => {
  return http.get('/people/1')
}

// const getPizzaFromForkifyAPI = () => {
//   return http.get()
// }

export default {
  getRandomStarWarsCharacter,
  // getPizzaFromForkifyAPI
}
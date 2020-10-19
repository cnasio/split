import http from '../api';

const getRandomStarWarsCharacter = () => {
  return http.get('/people/1')
}

export default {
  getRandomStarWarsCharacter
}
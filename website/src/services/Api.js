const axios = require('axios')
// Front request to Server

export default () => {
  // create axios object point to our backend URL 8081
  return axios.create({
    baseURL: `http://localhost:8081/` // Connect to our backend API,
  })
}
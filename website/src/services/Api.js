const axios = require('axios')
// Front request to Server

export default () => {
  // create axios object point to our backend URL 8081
  return axios.create({
    baseURL: `http://18.216.247.248:8081/` // Connect to our backend API,
  })
}

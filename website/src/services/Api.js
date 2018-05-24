const axios = require('axios')
var ip = require('ip');
// Front request to Server
const address = ip.address()

export default () => {
  // create axios object point to our backend URL 8081
  return axios.create({
    baseURL: `http://${address}:8081/` // Connect to our backend API,
  })
}

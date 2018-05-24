const axios = require('axios')
var ip = require('ip');
// Front request to Server
const address = req.connection.localAddress

console.log(address)

export default () => {
  // create axios object point to our backend URL 8081
  return axios.create({
    baseURL: `http://18.216.247.248:8081/` // Connect to our backend API,

  })
}

const axios = require('axios')

// Front request to Server
const publicIp = require('public-ip');
var address = ""

publicIp.v4().then(ip => {
  address = ip
  //=> '46.5.21.123'
  console.log(`http://${address}:8081/`)
});


export default () => {
  // create axios object point to our backend URL 8081
  return axios.create({
    // need to change to localhost when we need to develop on our laptop
    baseURL: `http://${address}:8081/` // Connect to our backend API,
  })
}

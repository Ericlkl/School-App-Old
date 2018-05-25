const axios = require('axios')

// Front request to Server

export default () => {
  // create axios object point to our backend URL 8081
  return axios.create({
    // need to change to localhost when we need to develop on our laptop
    baseURL: `http://172.31.46.249:8081/` // Connect to our backend API,
  })
}

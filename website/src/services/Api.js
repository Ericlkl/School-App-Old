const axios = require('axios')

// Front request to Server

export default () => {
  // create axios object point to our backend URL 8081
  return axios.create({
    // when we developing the website, it should be localhost 
    // when we deploy the website to the server, change it to public IP
    baseURL: `http://localhost:8081/` // Connect to our backend API,
  })
}
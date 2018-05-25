const publicIp = require('public-ip');

publicIp.v4().then(ip => {
  // //=> '46.5.21.123'
  console.log(`Your public ip is : ${ip}`)
});

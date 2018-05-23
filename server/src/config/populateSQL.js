const mysql = require('mysql')
const config = require('./config')

var con = mysql.createConnection({
  host: config.db.options.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
})
let super_script = `

-- Teachers Data
 INSERT INTO Teachers
  (FirstName,LastName,Gender,Address,PhoneNumber,Email ,Facebook_ID ,Qualification,
  Good_at,Personal_Description,Teachering_Experience,Music_skill,Language_skill,Image_URL) 
  VALUES("Glennys","Looker","Male","125 Melbourne street","1234567890","abc123@gmail.com"
  	,"GlennysFB","Master","Piano"
  	,"I am a pianist and composer who has taught people of all ages and levels, including absolute beginners, adult students, and taking students through AMEB or VCE exams. "
  	,' 7 Years Teaching Experience','Piano','English,Japanese'
  	,'https://segundadivisionweb.files.wordpress.com/2017/04/profesor-de-musica.jpg');



 `
function populateDb () {
  con.connect(function (err) {
    if (err) throw err
    console.log('Before insesrt')
    con.query(super_script, function (err, result) {
    if (err) throw err
    console.log('Insertion complete')
    })
  })
}

module.exports = populateDb()

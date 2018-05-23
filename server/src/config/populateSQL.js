const mysql = require('mysql')
const config = require('./config')

var con = mysql.createConnection({
  host: config.db.options.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
})
let super_script = `

-- Pineland Music School Data
-- Created by LEE KA LONG (ERIC)


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

 let test = `INSERT INTO Teachers
  (FirstName,LastName,Gender,Address,PhoneNumber,Email ,Facebook_ID ,Qualification,
  Good_at,Personal_Description,Teachering_Experience,Music_skill,Language_skill,Image_URL) 
  VALUES("Jesse", "Taylor", "Male","54 Oakwood Street","0738837180","taylor_j_12@gmail.com"
  	,"JTRocks","Master","Vocals and Guitar"
  	,"I am currently a member of ‘Master Safe’, a local rock cover band that plays in venues across the greater Brisbane area, as well as the Sunshine and Gold Coasts.
    I’ve been playing with Master Safe as their lead vocalist for five years now."
  	,' Two years with Pinelands Music School','Expert','English, Japanese, French'
      ,'https://i.imgur.com/7kgK3XL.jpg');`
      


// https://stackoverflow.com/questions/8899802/how-do-i-do-a-bulk-insert-in-mysql-using-node-js?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

function populateDb () {
  con.connect(function (err) {
    if (err) throw err
    console.log('Before insesrt')
    con.query(super_script, function (err, result) {
    if (err) throw err
    console.log('Insertion complete')
    })
    con.query(test, function (err, result) {
    if (err) throw err
    console.log('Insertion complete')
    })
  })
}

module.exports = populateDb()

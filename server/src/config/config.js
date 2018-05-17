module.exports = {
  port: process.env.PORT || 8080,
  db: {
    //                      To Stas
    // Warning !!! you need to run the mysql templete first!!
    // It is not Creating Database, it just only connect to it!
    // Therefore, run the sql file in IFB299-Project file in mysql Workbench first
    database: process.env.DB_NAME || 'Pineland_Music_School',
    // you might need to change the user name to use it
    // Insert your mySql database user name, normally it is root
    user: process.env.DB_USER || 'root',
    // Insert your mySql database password
    // Use your own password, this one might not suitable for you
    password: process.env.DB_PASS || 'KAlong0518',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: './pineland_music_school.sql'
    }
  }
}

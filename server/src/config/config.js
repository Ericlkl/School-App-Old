module.exports = {
  port: process.env.PORT || 8080,
  db: {
    database: process.env.DB_NAME || 'Pineland_Music_School',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'KAlong0518',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: './pineland_music_school.sql'
    }
  }
}

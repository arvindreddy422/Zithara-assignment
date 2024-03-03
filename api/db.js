const { Pool } = require('pg')
console.log(process.env.DB_PORT);
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.password,
  port: process.env.DB_PORT,
})

module.exports = pool

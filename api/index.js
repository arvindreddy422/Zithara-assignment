const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { getData } = require('./dataController')
const app = express()
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('working')
})
app.get('/api/data', getData)

app.listen(PORT, () => {
  console.log('server up on ' + PORT)
})

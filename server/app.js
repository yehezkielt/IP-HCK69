const express = require('express')
const UserController = require('./controllers/UserController')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/google-login", UserController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
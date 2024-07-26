const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('<h1>Olá, ExpressJS na área!</h1>')
})

// server.get('/about', function (req, res) {
//   res.send('About')
// })

server.listen(3000)
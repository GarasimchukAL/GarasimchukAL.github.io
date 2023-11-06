const express = require('express')
const app = express()

app.use(express.static(__dirname))
app.use('/pfe/current', express.static(__dirname + '/../dist/Pusher'))

app.listen(5422)
console.log('http://localhost:5422')
const express = require('express')
let server = express()
const parser = require('body-parser')

//mount middleware
server.use(parser.json())


//////////////////this section for server post/get functions
server.post('/', () => {})

server.get('/', () => {})





//server activation and listen
let port = 8080;
server.listen(port, () => console.log('listening at port ', port))
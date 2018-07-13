const express = require('express')
let server = express()
const parser = require('body-parser')

server.use(parser.json())
// Create web server
// Node.js

// Import modules
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Import routes
const comments = require('./routes/comments')

// Set up middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Set up routes
app.use('/comments', comments)

// Run web server
app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())

// Mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  
 
  // ROUTES
  app.get('/', (req, res) => {
      res.send('Welcome to an Awesome App about Books!')
    })

// BOOKS 
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)


    // 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  
  // LISTEN
  app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
  
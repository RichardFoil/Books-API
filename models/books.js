const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    
        
        title: {type: String, require: true},
        description: {type: String, require: false},
        year: {type: Number},
        quantity: {type: Number},
        image: {type: String, default: "https://place-puppy.com/100x100"} 
      
    
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
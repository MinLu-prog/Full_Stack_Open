const mongoose = require('mongoose');
require('dotenv').config()

mongoose.set('strictQuery',false)
const Note  = mongoose.Schema({
    content :{
        type : String,
        minLength : 5,
        required: true
    },
    user:{
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
    } , 
      important : Boolean
})

Note.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note',Note)
const mongoose = require('mongoose')

require('dotenv').config()
const url = process.env.DB
mongoose.connect(url ,{family : 4}).then(
    result =>{
        console.log('Database is connected');

    }
).catch(error => {
    console.log('Database is not connected',error.message);
})
mongoose.set('strictQuery',false)
const noteSchema = mongoose.Schema({
    content :{
        type : String,
        minLength : 5,
        required: true
    },
    important : Boolean
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note',noteSchema)
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const BlogSchema = mongoose.Schema({
     title: String,
     author: String,
     url: String,
     likes: Number,
     user :[ {
          type : mongoose.Schema.Types.ObjectId,
          ref : 'User1'
     }]
})

BlogSchema.set('toJSON',{
    transform : (document,returnedObject)=>{
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    //transform the api response to not include the passwordHash
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('Blog',BlogSchema)

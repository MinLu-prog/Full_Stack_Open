
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const url = process.env.DB
mongoose.connect(url,{family : 4}).then(
    result => {
        console.log('The DB is connected')
    }
).catch(error =>{
    console.log('The DB is not connected', error.message);
})

const PhoneSchema = new mongoose.Schema ({
    name :{
        type : String,
        required : true,
        minLength :4,
        unique : true
    },
    number : Number,
})

PhoneSchema.set('toJSON',{
    transform:(document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Phone',PhoneSchema)

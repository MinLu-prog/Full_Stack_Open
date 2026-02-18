const express = require('express')
const app = express()
app.use(express.json())
const morgan = require('morgan')
app.use(express.static('dist'))

require('dotenv').config()
morgan.token('content', function (req, res) { 
    return JSON.stringify(req.body) }
)
const Phone = require('./models/phone')
//defining new token in morgan 
//morgan.token('token name' , function(req,res) {
// return something })


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content' ))

app.get('/api/persons',(request,response) => {
    Phone.find({}).then(result => {
      return  response.json(result)
    })

})
const requestLogger = (request,response,next) =>{
    console.log('Method' , request.method);
    console.log('Body', request.body);
    console.log('Path' , request.path);
    console.log('____');
    next()
}
app.use(requestLogger)


app.get('/info',(request,response)=>{
    const length = Phone.length
    const newDate = new Date();
    response.send(`<p>Phone book has the info for ${length} people </p>
        <br>
        <p>${newDate}</p>
        `)
})


app.post('/api/persons',(request,response,next) =>{
        const body = request.body
        const personObj = new Phone({

            name : body.name || null,
            number : body.number || null,
        })

        personObj.save().then(
            result => response.json(result)
        ).catch(error => next(error))
    
})
app.get('/api/persons/:id',(request,response)=>{
    const id = request.params.id
    Phone.findById(id).then(result =>{
        return   response.json(result)
    })
})


app.delete('/api/persons/:id',(request,response,next) =>{
    const id = request.params.id
    Phone.findByIdAndDelete(id).then(
      result =>  response.status(204).end()
    ).catch(error => next(error))
})

app.put('/api/persons/:id',(request,response,next)=>{
    const {name,number} = request.body
    const id = request.params.id
    Phone.findByIdAndUpdate(id ,{number},{new : true,runValidators : true}).then(
        phone =>{
            if(!phone){
                return response.status(404).end()
            }

              return response.json(phone)
    
        }
    ).catch(error => next(error))
})

const errorHandler = (error,request,response,next) => {
    console.error(error.mnessage)
         if (error.name === 'CastError') {
     return response.status(400).send({ error: 'malformatted id' })
  }
  next()
}

app.use(errorHandler)
const port = process.env.PORT

app.listen(port ,() =>{
    console.log(`Port is connected to ${port}`);
})
const express = require('express')
const app = express()  //express applicaton stored in app 
app.use(express.json())
app.use(express.static('dist'))

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const Note = require('./models/note.js')
const note = require('./models/note.js')

app.get('/api/note', (request,response) =>{
    Note.find({}).then(result => {
      result.forEach(note =>{
        response.json(note)
        console.log(note);
      })
    })
})
app.get('/', (request,response) => {
    response.send('<h1>Hello World</h1>')
})
app.get('/api/notes/:id', (request , response) => {
    Note.findById(request.params.id).then(note => {
      if(note){
        response.json(note)
      }
      else{
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  const noteObj = new Note({
    content : body.content || null,
    important : body.important || false
  })
  if(!body.content) {
    return response.status(404).json(
      {
        error : 'content missing'
      }
    )
  }
  noteObj.save().then(Savednote =>
    response.json(Savednote)
  ).catch(error => next(error))

 
})
app.use(express.static('dist'))


app.delete('/api/notes/:id', (request,response,next) =>{
  Note.findByIdAndDelete(request.params.id).then(
    result =>{
      response.send(204).end()
    }
  )
  .catch(error => next(error))
})

app.put('/api/notes/:id',(request,response,next)=>{
  const {content,important} = request.body
  Note.findById(request.params.id).then(
    note =>{
        if(!note){
          return response.status(404).end()
        }
          note.content =content
          note.important = important
        return note.save().then(result =>{
          response.json(result)
        })
    }
  ).catch(error => next(error))
})


//Event Handler function get function response to two parameters , request parameter contains all the information of the HTTP request and the second parameter defines how the request i responded to 

//request ကို responsd တာက response.send နဲ့ respond 


// app.delete('/api/notes/:id',(request,response)=>{
//   const id = request.params.id
//    notes = notes.filter(note => note.id != id) //i don't declare it so that i will replace the old value with the new one 
//   response.status(204).end() //204 means no context

// })



const requestlogger = (request ,response,next) =>{
  console.log('Method: ',request.method);
  console.log('Path: ',request.path);
  console.log('Body: ',request.body);
  console.log('___');
  next()
}
app.use(requestlogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


app.use(unknownEndpoint)


const errorHandler = (error , request, response,next) =>{
      console.error(error.message)
      if (error.name === 'CastError') {
     return response.status(400).send({ error: 'malformatted id' })
  } 
  
}

app.use(errorHandler)
const PORT = process.env.PORT || 3001
app.listen(PORT , ()=>{
  console.log(`Server running on Port ${PORT}`);
})
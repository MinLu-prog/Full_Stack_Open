const express = require('express')
const app = express()  //express applicaton stored in app 
app.use(express.json())
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

app.get('/', (request,response) => {
    response.send('<h1>Hello World</h1>')
})
const generateId = () =>{
  const maxID = notes.length > 0 ? Math.max(...notes.map(n => Number(n.id))) : 0
  return String(maxID + 1)
}
app.post('/api/notes', (request, response) => {
  const body = request.body

  const noteObj = {
    id : generateId(),
    content : body.content || null,
    important : body.important || false
  }
  if(!body.content) {
    return response.status(404).json(
      {
        error : 'content missing'
      }
    )
  }

  notes = notes.concat(noteObj)
  response.json(notes)
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

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


app.use(unknownEndpoint)
app.use(requestlogger)
const PORT = process.env.PORT || 3001
app.listen(PORT , ()=>{
  console.log(`Server running on Port ${PORT}`);
})
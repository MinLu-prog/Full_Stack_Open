const express = require('express')
const app = express()
app.use(express.json())
const morgan = require('morgan')
app.use(express.static('dist'))
morgan.token('content', function (req, res) { 
    return JSON.stringify(req.body) }
)
//defining new token in morgan 
//morgan.token('token name' , function(req,res) {
// return something })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content' ))
let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
const generateId = () =>{
    const maxId = persons.length > 0 ? (Math.max(...persons.map(person => Number(person.id)))) : 0
    return String(maxId + 1 );
}

app.get('/api/persons',(request,response) => {

    response.json(persons)
})



app.get('/info',(request,response)=>{
    const length = persons.length
    const newDate = new Date();
    response.send(`<p>Phone book has the info for ${length} people </p>
        <br>
        <p>${newDate}</p>
        `)
})

const checkMatch = (name) => {
    return persons.some(p => p.name === name)
}

app.post('/api/persons',(request,response) =>{
        const body = request.body
        const personObj ={
            id : generateId(),
            name : body.name || null,
            number : body.number || null,
        }
        if(checkMatch(body.name)){
            response.status(404).json({
                error : 'The name must be unique'
            })
        }else if( personObj.name == null || personObj.number == null){
            response.send(`<h1>The name or number is required</h1>`)
        }
        else{
            const newpersons = persons.concat(personObj)
            response.json(newpersons)
        }
})
app.get('/api/persons/:id',(request,response)=>{
    const id = request.params.id
    const person = persons.filter(p => p.id == id)
    if(!person){
        response.status(204).end()
    }else{
    response.json(person)
    }
})

app.get('/api/body',(request,response)=>{
    const body = request.body
    response.json(persons)
})

const port = 3001
app.listen(port ,() =>{
    console.log(`Port is connected to ${port}`);
})
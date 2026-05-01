const User = require('../models/user')
const Note = require('../models/note')
const initialNotes = [
   {
    content: 'HTML is easy',
    important: false
  },
  {
    content: 'Browser can execute only JavaScript',
    important: true
  }
]

const notesInDB = async () =>{
  const notes = await Note.find({})
  return notes.map(n=> n.toJSON())
}
const userInDB = async ()=>{
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon' })
  await note.save()
  await note.deleteOne()

  return note._id.toString()
}
module.exports ={
  userInDB, initialNotes, nonExistingId, notesInDB
}

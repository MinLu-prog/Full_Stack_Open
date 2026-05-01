const { test, after, beforeEach,describe } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const assert = require('node:assert')
const Note = require('../models/note')
const {initialNotes} = require('../tests/tests_helper')
const logger = require('../utils/logger')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const api = supertest(app)
const helper = require('../tests/tests_helper')
require('dotenv').config()
mongoose.connect(process.env.TEST_MONGODB_URI,{family:4}).then(
  ()=>{
    logger.info('DB is connected')
  }
).catch(error => {
  logger.error(error.message)
})
beforeEach(async () => {
  await Note.deleteMany({})

  let noteObject = new Note(initialNotes[0])
  await noteObject.save()

  noteObject = new Note(initialNotes[1])
  await noteObject.save()
})

test('all notes are returned', async () => {
  const response = await api.get('/api/notes')
  assert.strictEqual(response.body.length, 2)
})

test('a specific note is within the returned note', async () => {
  const response = await api.get('/api/notes')
  const contents = response.body.map(e => e.content)
  assert.strictEqual(contents.includes('HTML is easy'), true)
})

test('note are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

describe('when there is initially  one user in db',() =>{
  beforeEach(async () =>{
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })
  test('creation is completed with a new username ', async () =>{
    const userAtStart = await helper.userInDB();

    const newUser ={
       username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
    .post('/api/users')
    .send(newUser)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const userAtEnd = await helper.userInDB()
    assert.strictEqual(userAtEnd.length , userAtStart.length  + 1)

    const usernames = userAtEnd.map(u=> u.username)
    assert(usernames.includes(newUser.username))

  
  })
})

after(async () => {
  await mongoose.connection.close()
})
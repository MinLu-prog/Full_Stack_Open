const { test, after, before, beforeEach, describe } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/Blog')
const assert = require('node:assert')
const config = require('../utils/config')
const User = require('../models/User')
const helper = require('../utils/helper')
const api = supertest(app)
const bcrypt = require('bcrypt')
const initialBlogs = [
  {
    title: "MMSP",
    author: "Ma a loe lay",
    url: "/gg",
    likes: 3
  },
  {
    title: "Ma a loe lay",
    author: "Nga loe ma thar",
    url: "/ff",
    likes: 4
  }
]

before(async () => {
  await mongoose.connect(config.MONGODB_URI, { family: 4 })
})

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(initialBlogs)
  await User.deleteMany({})
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  assert.strictEqual(response.body.length, 2)
})

test('Blogs can be added', async () => {
  const newBlog = {
    title: "Nga loe ma thar",
    author: "Shwe min Lu",
    url: "/gg",
    likes: 5
  }

  await api.post('/api/blogs').send(newBlog).expect(200)

  const response = await api.get('/api/blogs')
  assert.strictEqual(response.body.length, initialBlogs.length + 1)
})

test('if likes property missing, defaults to 0', async () => {
  const newBlog = {
    title: "No likes blog",
    author: "Shwe min Lu",
    url: "/gg"
  }

  const response = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)

  assert.strictEqual(response.body.likes, 0)
})

test('Blogs can be deleted', async () => {
  const blogsAtStart = await Blog.find({})
  const blogToDelete = blogsAtStart[0]

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)

  const blogsAtEnd = await Blog.find({})
  assert.strictEqual(
    blogsAtEnd.length,
    blogsAtStart.length - 1
  )
}),

test('Creation is completed with a new username', async() =>{
  const userAtStart = await helper.userInDB()
  
  const newUser = {
    username : 'min',
    name : 'Shwe Min Lu',
    password : '!12345678?@Aa'
  }

    await api.post('/api/users').send(newUser).expect(201).expect('Content-Type',/application\/json/)
  const userAtEnd = await helper.userInDB()
  assert.strictEqual(userAtStart.length , userAtEnd.length-1)
  const usernames = userAtEnd.map(u=> u.username)
  assert(usernames.includes(newUser.username))


  
 
})

test('Test of the invalid username or password', async()=>{
  const userAtStart = await helper.userInDB()
  const newUser = {
    name : "Li",
    username : 'Lin Lat Aung',
    password : 'ab'
  }
  await api.post('/api/users').send(newUser).expect(400).expect('Content-Type',/application\/json/)
  const userAtEnd = await helper.userInDB()
  assert.strictEqual(userAtStart.length , userAtEnd.length)

})

after(async () => {
  await mongoose.connection.close()
})
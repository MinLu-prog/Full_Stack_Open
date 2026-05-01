const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const assert = require('node:assert')
const Note = require('../models/note')
const logger = require('../utils/logger')
const api = supertest(app)
require('dotenv').config()
mongoose.connect(process.env.TEST_MONGODB_URI,{family:4}).then(
  ()=>{
    logger.info('DB is connected')
  }
).catch(error => {
  logger.error(error.message)
})
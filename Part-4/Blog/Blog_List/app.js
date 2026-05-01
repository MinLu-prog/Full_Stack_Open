const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const loginRouter = require('./controllers/Login')
const blogRouter = require('./controllers/Blog')
const userRouter = require('./controllers/User')

const app = express()

logger.info('Connecting to ', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI,{family : 4}).then(
    result => logger.info('MongoDB is connected')
).catch(error => {
    logger.error(error.message)
})

app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogRouter)
app.use('/api/users',userRouter)
app.use('/api/login',loginRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
app.use(middleware.getTokenFrom)
app.use(middleware.userExtractor)
module.exports = app
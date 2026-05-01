const blogRouter = require('express').Router()
const User = require('../models/User')
const Blog = require('../models/Blog')
const jwt = require('jsonwebtoken')
const { userExtractor } = require('../utils/middleware')


blogRouter.get('/',async (request,response) =>{
    const blogs = await Blog.find({}).populate('user',{username: 1,name : 1,id : 1})
    response.json(blogs)
})


blogRouter.post('/',userExtractor, async (request,response)=>{
    const body = request.body
    const user =  request.user

    const blog = new Blog({
        title : body.title,
        author : body.author,
        url : body.url,
        likes : body.likes,
        user : user._id

    })
    
    const savedBlog = await blog.save();
    user.blog = user.blog.concat(savedBlog._id)
    await user.save()
    response.status(201).json(savedBlog)

})

blogRouter.delete('/:id',userExtractor,async(request,response)=>{
    const decodeToken = jwt.verify(request.token, process.env.SECRET)
    if(!decodeToken){
        return response.status(401).json({error : 'Invalid Token'})
    }
    const blog = Blog.findById(request.params.id)
    if(blog.user.toString() !== decodeToken.id){
        return response.status(404).json({error : 'Error'})
    }
    await Blog.findByIdandDelete(request.params.id)
    response.status(204).end()
})
module.exports  = blogRouter

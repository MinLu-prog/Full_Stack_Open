const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User1 = require('../models/User')
userRouter.get('/',async(request,response)=>{
    const users = await User1.find({}).populate('blog',{url:1 , title : 1 , author : 1 , id : 1})
    response.json(users)
})

userRouter.post('/',async(request,response) =>{
    const {username , name , password } = request.body
    console.log(request.body)
    const saltRounds = 10
 
    const passwordHash = await bcrypt.hash(password,saltRounds)

    const user = new User1({
        username, 
        name, 
        passwordHash
    })

    if(user.username.length <= 2 || !user || password.length <=2 ){
       return response.status(400).json({error : "Invalid Username or Password"})
    }
    const savedUser = await user.save()
    response.status(201).json(savedUser);

})


module.exports = userRouter
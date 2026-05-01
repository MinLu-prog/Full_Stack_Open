const mongoose = require('mongoose')
const User = require('../models/User')
const userInDB = async ()=>{
        const users = await User.find({})
        return users.map(u=> u.toJSON())
}

module.exports = {userInDB}
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const {generateToken} = require('../utils/generateToken')

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email:email })
    const userPassword = await User.findOne({password:password})

    if (user, userPassword) {
        res.status(200).json(user)
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }})
   


const createUser = asyncHandler(async (req, res, next) => {
    const {
        firstName, 
        lastName, 
        email, 
        password, 
    } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error ('A user with this email has already been created')
    } 

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json(user)
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

const getUsers = asyncHandler(async ( req, res) => {
    const users = await User.find()

    if (!users) {
        res.status(401)
        throw new Error('there are no users in your DB')
    }
    res.status(200).json(users)
})

module.exports = {
    authUser,
    createUser,
    getUsers
}
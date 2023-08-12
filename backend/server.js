const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const { errorHandler, notFound} = require('./middleware/errorHandler.js')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(`/api/v1/user`, userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port: ${port}`))
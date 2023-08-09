const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Routes
app.use(`/api/v1/appointments`, require(`./routes/appointments`))

app.listen(port, () => console.log(`Server running on port: ${port}`))
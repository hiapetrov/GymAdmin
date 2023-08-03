const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

const URL = process.env.MONGO_URL

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('DB Connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api/appointments', require(`./routes/appointments`))

app.listen(port, () => console.log(`Server running on port: ${port}`))
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

const URL = process.env.MONGO_URL

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB successfully!');
    // Rest of your code...
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express()

app.use('/api/appointments', require(`./routes/appointments`))

app.listen(port, () => console.log(`na maika ti putkata ${port}`))

process.on('SIGINT', () => {
    
    server.close(() => {
      console.log('Server closed gracefully.');
      process.exit(0);
    });
  });
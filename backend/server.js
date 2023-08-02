const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/appointments', require(`./routes/appointments`))

app.listen(port, () => console.log(`na maika ti putkata ${port}`))
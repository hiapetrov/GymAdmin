const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.get('/api/appointments/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `got milk ${id}`})
})

app.listen(port, () => console.log(`na maika ti putkata ${port}`))
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import userRoutes  from './routes/userRoutes.js'
import { errorHandler, notFound} from './middleware/errorHandler.js'

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
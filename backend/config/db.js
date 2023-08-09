const mongoose = require('mongoose')

const URL = process.env.MONGO_URL

const connectDB = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('DB Connected')})
    } catch (error) {
        console.log('Error connecting to MongoDB:', error)
        
    }
}
   
module.exports = connectDB
import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('DB Connected')})
    } catch (error) {
        console.log('Error connecting to MongoDB:', error)
        
    }
}
   
export default connectDB
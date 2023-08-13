import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema ({
    firstName: {
        type : String,
        required : [true, 'Please add your first name in the field']
    },
    lastName: {
        type : String,
        required : [true, 'Please add your first name in the field']
    },
    password: {
        type : String,
        required : [true, 'Please add your first name in the field']
    },
    email: {
        type : String,
        required : [true, 'Please add your first name in the field']
    },
    
},
{
    timestamp: true,
}
)

userSchema.pre("save", async function (next) {
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema);


export default User
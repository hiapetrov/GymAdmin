const mongoose = require('mongoose')

const itemSchema = mongoose.Schema ({
    name: {
        type : String,
        required : [true, 'Please add your first name in the field']
    },
},
{
    timestamp: true,
    _id:{
        type:String
    }
}
)

module.exports = mongoose.model('Items', itemSchema)
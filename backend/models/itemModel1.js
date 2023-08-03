const mongoose = require('mongoose')

const itemSchema = mongoose.Schema ({
    name: {
        type : String,
        required : [true, 'Please add your first name in the field']
    },
    lastName: {
        type : String,
        required : [true, 'Please add your last name in the field']
    },
    date: {
        type : Date,
        get: (date)=> date.toLocaleDateString("sp-MX"),
        required : [true, 'Please add date in the field']
    },
    // type: {
    //     type : String,
    //     require : [true, 'Please add type in the field']
    // },
    // duration: {
    //     type : Number,
    //     require : [true, 'Please add duration in the field']
    // },
})

module.exports = mongoose.model('Items', itemSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerShema = new Schema ({
    email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        maxlength: 100,
        required: true
    },
    score:{
        type: Number,
        required: true
    }
})

var Answer = module.exports = mongoose.model('answer', answerShema);
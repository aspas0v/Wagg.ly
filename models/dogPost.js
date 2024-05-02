const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});

const dogPost = mongoose.model('dogPost', dogSchema);
module.exports = dogPost;
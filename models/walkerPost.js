const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const walkerSchema = new Schema({
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

const walkerPost = mongoose.model('walkerPost', walkerSchema);
module.exports = walkerPost;
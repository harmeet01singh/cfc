const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    id: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

var Blogs = mongoose.model('Blog', blogSchema);

module.exports = Blogs; 
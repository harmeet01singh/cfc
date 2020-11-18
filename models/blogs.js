const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
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
    Content: {
        type: String,
        required: true
    },
    tags: [{
        name: {
            type: String
        }
    }]
});

var Blogs = mongoose.model('Blog', blogSchema);

module.exports = Blogs; 
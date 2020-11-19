const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    id: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

var Feedbacks = mongoose.model('Feedback', feedSchema);

module.exports = Feedbacks; 
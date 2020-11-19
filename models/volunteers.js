const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volSchema = new Schema({
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
    address: {
        type: String,
        required: true
    },
    zip:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    }
});

var Volunteers = mongoose.model('Volunteer', volSchema);

module.exports = Volunteers; 
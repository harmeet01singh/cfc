const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const handSchema = new Schema({
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
    thing: {
        type: String,
        required: true
    }
});

var Handins = mongoose.model('Handin', handSchema);

module.exports = Handins; 
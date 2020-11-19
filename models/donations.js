const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donateSchema = new Schema({
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
    amount: {
        type: String,
        required: true
    },
    pan: {
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
    method: {
        type: String,
        required: true
    }
});

var Donations = mongoose.model('Donate', donateSchema);

module.exports = Donations; 
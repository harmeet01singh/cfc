const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helpSchema = new Schema({
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
    situation:{
        type: String,
        required: true
    }
});

var Helps = mongoose.model('Help', helpSchema);

module.exports = Helps; 
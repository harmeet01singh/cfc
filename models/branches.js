const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    manager: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    }
});

var Branches = mongoose.model('Branch', branchSchema);

module.exports = Branches; 
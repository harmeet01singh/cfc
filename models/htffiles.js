const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    id:{
        type: String,
        default: ''
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    }
});

var Htfiles = mongoose.model('Htfile', fileSchema);

module.exports = Htfiles; 
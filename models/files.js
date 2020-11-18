const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
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

var Files = mongoose.model('File', fileSchema);

module.exports = Files; 
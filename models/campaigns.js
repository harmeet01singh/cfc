const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const campSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    aim: {
        type: String,
        required: true
    },
    need: {
        type: String,
        required: true
    },
    since: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    testimonials: [ testimonialSchema ]
});

var Campaigns = mongoose.model('Campaign', campSchema);

module.exports = Campaigns; 
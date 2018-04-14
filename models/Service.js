const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Services = new Schema({
    price: String,
    service: String,
    duration: String,
});

module.exports = mongoose.model('Services', Services);
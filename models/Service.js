const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Services = new Schema({
    service: String,
    duration: String,
});

module.exports = mongoose.model('Services', Services);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema({
    name: String,
    phoneNumber: String,
    email: String,
    message: Text,
    timestamps: true
    });

module.exports = mongoose.model('Message', Message);
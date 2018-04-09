const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema({
    vehicle: String,
    date: String,
    time: String,
    location: String,
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client"
      }
    }, {
      timestamps: true
    });

module.exports = mongoose.model('Appointment', Appointment);
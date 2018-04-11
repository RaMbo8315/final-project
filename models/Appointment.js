const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema({
    title: String,
    duration: String,
    start: String,
    end: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }, {
      timestamps: true
    });

module.exports = mongoose.model('Appointment', Appointment);
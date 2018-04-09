const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema({
    title: String,
    duration: String,
    start: Date,
    end: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }, {
      timestamps: true
    });

module.exports = mongoose.model('Appointment', Appointment);
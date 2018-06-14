const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema({
    name: {
      type: String,
      required: true,
  },
    title: {
      type: String,
      required: true,
  },
    price: {
      type: String,
      required: true,
  },
    duration: {
      type: String,
      required: true,
  },
    start:  {
      type: Date,
      required: true,
      unique: true
  },
    end: {
      type: Date,
      required: true,
      unique: true
  },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }, {
      timestamps: true
    });

module.exports = mongoose.model('Appointment', Appointment);
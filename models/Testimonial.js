const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Testimonial = new Schema({
    name: String,
    vehicle: String,
    comment: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }, {
      timestamps: true
    });

module.exports = mongoose.model('Testimonial', Testimonial);
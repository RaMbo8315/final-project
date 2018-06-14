const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
    name: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }, {
      timestamps: true
    });

module.exports = mongoose.model('Review', Review);
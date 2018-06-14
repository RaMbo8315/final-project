const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
	firstName: String,
	lastName: String,
	phoneNumber: String,
	address: String,
	address2: String,
	city: String,
	state: String,
	zip: String,
},{
	timestamps: true
  });
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
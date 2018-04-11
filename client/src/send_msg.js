const accountSid = 'AC6d2e4cd23e2e32c0b7776de543960f31';
const authToken = '8259c700a6797a3501d408eac853dd06';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+14074463684',
    from: '+13212041483',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  },
  (err, message) => {
    console.log(message.sid);
  }
);
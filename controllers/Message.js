var db = require("../models");

module.exports = {

    AllMessages: function (req, res) {
        db.Message.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    CreateMessage: function (req, res) {
            db.Message.create(req.body)
            .then(function (dbAppointment) {})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err)
                res.json(err);
            });
    }
}
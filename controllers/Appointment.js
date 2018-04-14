var db = require("../models");

module.exports = {

    AllAppointments: function (req, res) {
        db.Appointment.find({})
            .then(function (data) {
                console.log(data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    AppointmentsByClient: function (req, res) {
        db.Appointment.find({
                client: req.params.id
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    MatchedAppointment: function (req, res) {
        db.Appointment.find({
                $and:[{start:{$lte:req.params.Appt}},
                        {end:{$gt:req.params.Appt}}
                    ]
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    DeleteAppointment: function (req, res) {
        db.Appointment.deleteOne({
                _id: req.params.id
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    CreateAppointment: function (req, res) {
        db.Appointment.create(req.body)
            .then(function (dbAppointment) {})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err)
                res.json(err);
            });
    },

    UpdateAppointment: function (req, res) {
        db.Appointment.updateOne({
                _id: req.params.id,

            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
}
var db = require("../models");

module.exports = {

    AllAppointments: function (req, res) {
        db.Appointment.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    AppointmentsByUser: function (req, res) {
        db.Appointment.find({
                user: req.params.userId
            }).sort({start: -1})
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

    DoubleAppointment: function (req, res) {
        db.Appointment.find({
                $and:[{start:{$lt:req.params.Appt}},
                        {end:{$gte:req.params.Appt}},
                    ]
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    BetweenAppointment: function (req, res) {
        db.Appointment.find({
                $and:[{start:{$gte: new Date(JSON.parse(req.params.Appt).appt1).toISOString()}},
                        {end:{$lte: new Date(JSON.parse(req.params.Appt).appt2).toISOString()}},
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
                _id: req.body._id
            },console.log(req.body._id))
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
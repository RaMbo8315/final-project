var db = require("../models");

module.exports = {
    AllUsers: function (req, res) {
        db.User.find({})
            .then(function (data) {
                console.log(data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    UserByUsername: function (req, res) {
        db.User.find({
                    username: req.params.username
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    CreateUser: function (req, res) {
        db.User.create(req.body)
            .then(function (dbUser) {})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    UpdateUser: function (req, res) {
        db.User.update({
                 _id: req.body._id,},
            {$set: req.body})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    DeleteUser: function (req, res) {
        db.User.deleteOne({
                _id: req.params.id
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
}
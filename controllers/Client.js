var db = require("../models");

module.exports = {
    AllClients: function (req, res) {
        db.User.find({})
            .then(function (data) {
                console.log(data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    ClientById: function (req, res) {
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

    CreateClient: function (req, res) {
        db.User.create(req.body)
            .then(function (dbClient) {})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    UpdateClient: function (req, res) {
        db.User.updateOne({
                username: req.params.client.username,
            },console.log(req.params))
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    DeleteClient: function (req, res) {
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
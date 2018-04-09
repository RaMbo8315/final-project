var db = require("../models");

module.exports = {

    AllServices: function (req, res) {
        db.Service.find({})
            .then(function (data) {
                // console.log(data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    ServiceById: function (req, res) {
        db.Service.find({
            _id: req.params.id
        })
            .then(function (data) {
                // console.log(data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
}
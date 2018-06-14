var db = require("../models");

module.exports = {
    AllReviews: function (req, res) {
        db.Review.find({})
            .then(function (data) {
                console.log(data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    ReviewById: function (req, res) {
        db.Review.find({
                _id: req.params.id
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    CreateReview: function (req, res) {
        db.Review.create(req.body)
            .then(function (dbReview) {})
            .then(function (data) {
                res.json(data);

            })
            .catch(function (err) {
                res.json(err);
            });
    },

    UpdateReview: function (req, res) {
        db.Review.updateOne({
                _id: req.params.id,

            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    DeleteReview: function (req, res) {
        db.Review.deleteOne({
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
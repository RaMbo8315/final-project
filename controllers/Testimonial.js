var db = require("../models");

module.exports = {
    AllTestimonial: function (req, res) {
        db.Testimonial.find({})
            .then(function (data) {
                console.log(data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    TestimonialById: function (req, res) {
        db.Testimonial.find({
                _id: req.params.id
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    CreateTestimonial: function (req, res) {
        db.Testimonial.create(req.body)
            .then(function (dbTestimonial) {})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    UpdateTestimonial: function (req, res) {
        db.Testimonial.updateOne({
                _id: req.params.id,

            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    DeleteTestimonial: function (req, res) {
        db.Testimonial.deleteOne({
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
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const apptControllers = require("../controllers/Appointment");
	const reviewControllers = require("../controllers/Review");
	const userControllers = require("../controllers/User");
	const serviceControllers = require("../controllers/Service");
	const messageControllers = require("../controllers/Message");


	//add any API routes here
		// need to set up ticket controller for create
		router.get("/allAppt/", apptControllers.AllAppointments);

		router.get("/findAppt/:userId", apptControllers.AppointmentsByUser);

		router.post("/createAppt/", apptControllers.CreateAppointment);

		router.get("/matchedAppt/:Appt", apptControllers.MatchedAppointment);

		router.get("/doubleAppt/:Appt", apptControllers.DoubleAppointment);

		router.get("/betweenAppt/:Appt", apptControllers.BetweenAppointment);

		router.post("/deleteAppt/", apptControllers.DeleteAppointment);
		
		router.post("/updateAppt/", apptControllers.UpdateAppointment);
		
		router.get("/allReviews/", reviewControllers.AllReviews);
		
		router.get("/findReview/:id", reviewControllers.ReviewById);
		
		router.post("/createReview/", reviewControllers.CreateReview);
		
		router.post("/deleteReview/", reviewControllers.DeleteReview);
		
		router.post("/updateReview/", reviewControllers.UpdateReview);

		router.get("/allUsers/", userControllers.AllUsers);
		
		router.get("/findUser/:username", userControllers.UserByUsername);
		
		router.post("/createUser/", userControllers.CreateUser);
		
		router.post("/deleteUser/", userControllers.DeleteUser);
		
		router.post("/updateUser/", userControllers.UpdateUser);

		router.get("/allServices/", serviceControllers.AllServices);

		router.get("/ServiceById/:id", serviceControllers.ServiceById);

		router.get("/allMessage/", messageControllers.AllMessages);

		router.post("/createMessage/", messageControllers.CreateMessage);

	return router;
};
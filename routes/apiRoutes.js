module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const apptControllers = require("../controllers/Appointment");
	const testControllers = require("../controllers/Testimonial");
	const clientControllers = require("../controllers/Client");
	const serviceControllers = require("../controllers/Service");
	const messageControllers = require("../controllers/Message");


	//add any API routes here
		// need to set up ticket controller for create
		router.get("/allAppt", apptControllers.AllAppointments);

		router.get("/api/findAppt:id", apptControllers.AppointmentsByClient);

		router.post("/createAppt", apptControllers.CreateAppointment);

		router.get("/matchedAppt/:Appt", apptControllers.MatchedAppointment);

		router.get("/doubleAppt/:Appt", apptControllers.DoubleAppointment);

		router.get("/betweenAppt/:Appt", apptControllers.BetweenAppointment);

		router.post("/api/deleteAppt", apptControllers.DeleteAppointment);
		
		router.post("/api/updateAppt", apptControllers.UpdateAppointment);
		
		router.get("/api/allTest", testControllers.AllTestimonial);
		
		router.get("/api/findTest:id", testControllers.TestimonialById);
		
		router.post("/api/createTest", testControllers.CreateTestimonial);
		
		router.post("/api/deleteTest", testControllers.DeleteTestimonial);
		
		router.post("/api/updateTest", testControllers.UpdateTestimonial);

		router.get("/allClients", clientControllers.AllClients);
		
		router.get("/findClient/:username", clientControllers.ClientById);
		
		router.post("/createClient", clientControllers.CreateClient);
		
		router.post("/api/deleteClient", clientControllers.DeleteClient);
		
		router.post("/api/updateClient", clientControllers.UpdateClient);

		router.get("/allServices", serviceControllers.AllServices);

		router.get("/ServiceById/:id", serviceControllers.ServiceById);

		router.get("/allMessage", messageControllers.AllMessages);

		router.post("/createMessage", messageControllers.CreateMessage);

	return router;
};
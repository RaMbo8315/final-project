module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const apptControllers = require("../controllers/Appointment");
	const testControllers = require("../controllers/Testimonial");
	const clientControllers = require("../controllers/Client");
	const serviceControllers = require("../controllers/Service");


	//add any API routes here
		// need to set up ticket controller for create
		router.get("/allAppt", apptControllers.AllAppointments);

		router.get("/api/findAppt:id", apptControllers.AppointmentsByClient);

		router.post("/createAppt", apptControllers.CreateAppointment);

		router.post("/api/deleteAppt", apptControllers.DeleteAppointment);
		
		router.post("/api/updateAppt", apptControllers.UpdateAppointment);
		
		router.get("/api/allTest", testControllers.AllTestimonial);
		
		router.get("/api/findTest:id", testControllers.TestimonialById);
		
		router.post("/api/createTest", testControllers.CreateTestimonial);
		
		router.post("/api/deleteTest", testControllers.DeleteTestimonial);
		
		router.post("/api/updateTest", testControllers.UpdateTestimonial);

		router.get("/api/allClients", clientControllers.AllClients);
		
		router.get("/api/findClient:id", clientControllers.ClientById);
		
		router.post("/createClient", clientControllers.CreateClient);
		
		router.post("/api/deleteClient", clientControllers.DeleteClient);
		
		router.post("/api/updateClient", clientControllers.UpdateClient);

		router.get("/allServices", serviceControllers.AllServices);

		router.get("/ServiceById/:id", serviceControllers.ServiceById);

	return router;
};
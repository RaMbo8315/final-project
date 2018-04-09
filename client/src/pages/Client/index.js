import React from 'react';
import "./style.css";
import axios from 'axios';
import BigCalendar from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import events from '../../event'
import Footer from "../../components/Footer";
import BootNav from "../../components/Nav";
import {
	Container,
	Col, 
	Form, 
	FormGroup, 
	Row, 
	Input, 
	Label, 
	Card, 
	CardBody, 
	CardHeader
} from 'reactstrap';

	// var appoint = [];
// gather other componets
//import otherComponent from "../otherComponent";
BigCalendar.momentLocalizer(moment);

export default class Client extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			services: [],
			service:{
				title: "",
				duration: ""
			},
			serviceId: "",
			start: "",
			end: "",
			appointments: "",
			test:[{
				title: "new",
				start: new Date('Thu, Apr 12, 2018 8:30 AM'),
				end: new Date('Thu, Apr 12, 2018 10:30 AM')
			}]
			}
		console.log(this.props)
  	}


	componentDidMount(){
		axios.get("/api/allServices").then((result)=>{
			console.log(result.data)
			this.setState({
			 services: result.data
			})	
		});
		axios.get("/api/allAppt").then((result)=>{
			console.log(result.data)
			// appoint = result.data
		});
	}

	onSlotChange(slotInfo) {
		this.setState({
			start:moment(slotInfo.start.toLocaleString()).format("llll"),
		})
    	var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD hh:mm:ss");
    	console.log(this.state.start); 
    	console.log(endDate);
	}

	onEventClick(event) {
		console.log(event);//Shows the event details provided while booking
	}

	handleChange = (event) => {
		const {name, value} = event.target; 
			// Set the state for the appropriate input field
		this.setState({
			[name]: value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const setDate = this.state.start;
		console.log(setDate)
		//call a sign In function
		this.setState({
			serviceId: "",
			start: "",
		}); 
		const {name} = event.target;
		axios.get("/api/ServiceById/" + this.state.serviceId)
			.then(function(data){
				let time = moment(setDate).add(data.data[0].duration, "m").toArray();
				console.log(time)
				const newAppt = {
					title: data.data[0].service,
					duration: data.data[0].duration,
					start: setDate,
					end: moment(time).format("llll")
				}
			console.log(newAppt)
			axios.post(name, newAppt).then(console.log("lol"))
			})
	}
		
	toggle() {
	  this.setState({
		isOpen: !this.state.isOpen
		});
	}

	render() {
		return(
			<div>
				<BootNav/>
				<Container>
					<Row>
						<Col lg="4">
							<Card className="card-register mx-auto mt-5 bg-gray">
								<CardHeader>Set an Appointment</CardHeader>
									<CardBody>
										<Form id="register">
											<FormGroup>
												<Row>
													<Col md="12">
														<Label for="serviceId">service</Label>
														<Input className="form-control" type="select" value = {this.state.serviceId} onChange = {this.handleChange} name="serviceId">
															<option selected></option>
														{(this.state.services.length)
														? this.state.services.map((job) => (
															<option value={job._id} key={job._id}>{job.service}</option>
														))
														: <option>no value</option>
														}
														</Input>
													</Col>
													<Col md="12">
														<Label for="date">date</Label>
														<Input className="form-control" value = {this.state.start} onChange = {this.handleChange} name="date" type="text" aria-describedby="nameHelp" placeholder="Enter last name"/>
													</Col>
												</Row>
											</FormGroup>
											<Input className="btn btn-primary btn-block" type = 'submit' name = "/api/createAppt" onClick = {this.handleSubmit}/>
										</Form>
								</CardBody>
							</Card>
						</Col>
						<Col lg="8">
							<br/>
							<BigCalendar
								selectable
								onSelectEvent={event => this.onEventClick(event)}
								onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
								events={events}
								min={new Date(2017, 10, 0, 8, 0, 0)}
								max={new Date(2017, 10, 0, 18, 0, 0)} 
								defaultView="week"
								defaultDate={new Date()}
							/>
						</Col>
					</Row>
						<br/>
				</Container>
					<br/>
				<Footer/>
			</div>
			);
	}
}


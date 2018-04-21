import React from 'react';
import "./style.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import * as FontAwesome from 'react-icons/lib/fa' ;
import PopOver from "../../components/PopOver";
import UserNav from "../../components/UserNav";
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
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button
	} from 'reactstrap';

BigCalendar.momentLocalizer(moment);

export default class Client extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appoint: [],
			client:{
				clientName: "",
				clientId: ""
			},
			services: [],
			service:{
				price: "",
				title: "",
				duration: ""
			},
			serviceId: "",
			start: "",
			startDate: "",
			end: "",
			newAppt:{
				name: "",
				title: "",
				duration: "",
				start: "",
				end: "",
				user: ""
			},
			doubleMatched: false,
			betweenMatched: false,
			matched: false,
			modal: false,
			popoverOpen: false
			}
		this.toggle = this.toggle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }

	  toggle() {
		this.setState({
		  modal: !this.state.modal
		});
	  }
	  
	  popToggle() {
		  this.setState({
			  popoverOpen: !this.state.popoverOpen
		  })
	  }
	
	componentDidMount = () =>{
		axios.get("/api/allServices").then((result)=>{
			this.setState({
			 services: result.data
			})	
			console.log(result.data)
		});
		axios.get("/api/allAppt").then((result)=>{
			this.setState({
				appoint: result.data
			})
		});
		axios.get("/api/findClient/" + this.props.auth.username).then((result)=>{
			console.log(result)
			this.setState({
				client:{
					clientName: result.data[0].firstName.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' '),
					clientId: result.data[0]._id
				}
			})
		});
	}

	onSlotChange(slotInfo) {
		this.setState({
			start: moment(slotInfo.start.toLocaleString()).format("llll"),
		})
		const getDate = JSON.stringify(Object.assign(this.state.start));
		this.setState({
			startDate: moment(getDate).format()
		})
		this.getMatch(this.state.start);
	}

	handleChange = (event) => {
		const {name, value} = event.target; 
			// Set the state for the appropriate input field
		this.setState({
			[name]: value
		});
		this.getMatch(this.state.start)
	}

	closeModal = () => {
		this.setState({
			newAppt:{
				name: "",
				title: "",
				duration: "",
				start:"",
				end: "",
				user: ""
			},
			service: {
				price: ""
			},
			start: "",
			startDate: "",
			matched: false,
			doubleMatched: false,
			betweenMatched: false
		})
		this.toggle();
	}

	getMatch = (date) => {
		let matchDate = "";
		if(date){
		matchDate = date;
		}
		console.log(matchDate)
		if(matchDate){
		axios.get("api/matchedAppt/" + matchDate).then((result) => {
			console.log(result.data[0])
			if(typeof result.data[0] === "undefined"){
				if(this.state.doubleMatched || this.state.betweenMatched === true){
				this.setState({
					matched: false,
					popoverOpen: true
				})
			}else{
				this.setState({
					matched: false,
					popoverOpen: false
				})
			}
			}else{
				this.setState({
					popoverOpen: true,
					matched: true,
					doubleMatched: false,
					betweenMatched: false
				})
			}
			console.log("match",this.state.matched)
			this.verifyAppt(this.state.serviceId);
		});
	}
	 }

	verifyAppt = (id) => {
		let serviceId = "";
		if(id){
			serviceId = id;
		}
		const setDate = moment(this.state.start).format();
		const clientId = this.state.client.clientId;
		const name = this.state.client.clientName;	
		console.log(serviceId)
		axios.get("/api/ServiceById/" + id)
			.then((data) => {
				console.log(data.data.value)
				if(!typeof data.data.value === "undefined"){
				let endTime = moment(setDate).add(data.data[0].duration, "m").format();
				let price = data.data[0].price;
				let duration = data.data[0].duration;
				let title = data.data[0].service;
				console.log(data.data.value)
				this.setState({
					newAppt:{
						name: name,
						title: title,
						duration: duration,
						start:setDate,
						end: endTime,
						user: clientId
					},
					service: {
						price: price
					},
				})
			}
	console.log(this.state.newAppt)
			axios.get("api/doubleAppt/" + this.state.newAppt.end).then((result) => {
				console.log(result.data.value)
				if(typeof result.data[0] === "undefined" && typeof result.data.value === "undefined"){
					if(this.state.matched || this.state.betweenMatched === true){
						this.setState({
							doubleMatched: false,
							popoverOpen: true
						})
					}else{
						this.setState({
							doubleMatched: false,
							popoverOpen: false
						})
					}
				}else{
					this.setState({
						popoverOpen: true,
						doubleMatched: true,
						matched: false,
						betweenMatched: false
					})
				}
				console.log("double",this.state.doubleMatched)
			})
			const appt = {
				appt1: this.state.newAppt.start,
				appt2: this.state.newAppt.end
			};
					axios.get("/api/betweenAppt/" + JSON.stringify(appt)
					).then((result) => {
					console.log(result.data[0])
					if(typeof result.data[0] === "undefined"){
						if(this.state.doubleMatched || this.state.matched === true){
							this.setState({
								betweenMatched: false,
								popoverOpen: true
							})
						}else{
							this.setState({
								betweenMatched: false,
								popoverOpen: false
							})
						}
					}else{
						this.setState({
							popoverOpen: true,
							betweenMatched: true,
							doubleMatched: false,
							matched: false
						})
					}
					console.log("between",this.state.betweenMatched)
					})
			
				})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if(this.state.matched || this.state.doubleMatched || this.state.betweenMatched === true){
			this.setState({
				start: "",
				startDate: "",
				matched: false,
				doubleMatched: false,
				overMatched: false,
				popoverOpen: true
			})
		}else{
		this.setState({
			popoverOpen: false,
			modal: !this.state.modal
		  });
		  
		this.state.appoint.push(this.state.newAppt)
				axios.post("api/createAppt/", this.state.newAppt).then((result) => {
					console.log(result)
				})
		}
	}
	
	render() {
		const onSuccess = (payment) => {
			// Congratulation, it came here means everything's fine!
					console.log("The payment was succeeded!", payment);
					// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		}		
		
		const onCancel = (data) => {
			// User pressed "cancel" or close Paypal's popup!
			console.log('The payment was cancelled!', data);
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		}	
		
		const onError = (err) => {
			// The main Paypal's script cannot be loaded or somethings block the loading of that script!
			console.log("Error!", err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear			
		}			
			
		let env = 'sandbox'; // you can set here to 'production' for production
		let currency = 'USD'; // or you can set this value from your props or state  
		let total = parseInt(this.state.service.price, 10); // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
		// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
		
		const client = {
			sandbox:    'AZKxB1WrxdJYWz6qeZPuSI64_2jGyf1YMvPT3yrEmvvvphs5ShY6lCkc-UehxgnPKSzGtMpy2tC78rcH',
			production: 'YOUR-PRODUCTION-APP-ID',
		}
		
		const  style = {
			size: 'medium',
			color: 'blue',
			shape: 'rect',
			label: 'pay',
			tagline: false 
		}
		// In order to get production's app-ID, you will have to send your app to Paypal for approval first
		// For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"): 
		//   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
		// For production app-ID:
		//   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/	

		let Calendar = () =>(
		<BigCalendar
		selectable
		onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
		events={this.state.appoint}
		views={['week', 'day']}
		min={new Date(0, 0, 0, 8, 0, 0)}
		max={new Date(0, 0, 0, 18, 0, 0)} 
		defaultView="week"
		defaultDate={new Date()}
		startAccessor={((e)=>{ return new Date(e.start) })}
		endAccessor={((e)=>{ return new Date(e.end)})}
	  />)
		return(
			<div> 
				<UserNav handleLogout={this.props.handleLogout}>
				{this.state.client.clientName}
				</UserNav>
				<Container>
					<h1 className="mt-4 mb-3">Schedule Appointment</h1>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/Profile">Profile</Link>
						</li>
						<li className="breadcrumb-item active">Schedule Appointment</li>
					</ol>
					<Row>
						<Col lg="4">
							<br/>
							<p><strong>* Choose the day and time you would like to schedule by clicking on the calendar and choose a service from the dropdown, Highlighted areas are unavailable</strong></p> 
							<hr/>
							<Card className="card-register mx-auto mt-5 bg-gray" outline color="info">
									<CardBody>
										<Form>
											<FormGroup>
												<Row>
													<Col md="12">
														<Label for="serviceId">Choose a Service from dropdown</Label>
														<Input className="form-control" type="select" value = {this.state.serviceId} onChange = {this.handleChange} name="serviceId">
															<option></option>
														{(this.state.services.length)
														? this.state.services.map((job) => (
														(job.service === "Wash" ? 
														<option value={job._id} key={job._id}>{job.service} - ${job.price} - {Math.floor(parseInt(job.duration,10)%60)} minutes</option> 
														: <option value={job._id} key={job._id}>{job.service} - ${job.price} - {Math.floor(parseInt(job.duration,10)/60)} hours</option>)
														))
														: <option>no value</option>
														}
														</Input>
													</Col>
													<Col md="12">
														<Label for="date">Date</Label>
														<Input className="form-control" value = {this.state.start} id="Popover1" onChange = {this.handleChange} name="date" type="text" aria-describedby="nameHelp" placeholder="Choose a Day and Time from Calendar"/>
														<PopOver
															popoverOpen={this.state.popoverOpen}
														/>
													</Col>
												</Row>
											</FormGroup>
											<Input className="btn btn-primary btn-block" type = 'submit' onClick = {this.handleSubmit}/>								
										</Form>
								</CardBody>
							</Card>
						</Col>
						<Col lg="8">
							<br/>
							<Calendar/>
							<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
								<ModalHeader toggle={this.toggle}>Your appointment has been scheduled</ModalHeader>
								<ModalBody>
									Thank you  <strong>{this.state.newAppt.name}</strong>, for scheduling an appointment with us. We'll see you on <strong>{moment(this.state.newAppt.start).format('llll')}</strong> for your <strong>{this.state.newAppt.title}</strong> service. Your	<strong>{this.state.newAppt.title}</strong> service will cost <strong>${this.state.service.price}</strong>. You can pay now with <strong><FontAwesome.FaPaypal size={28} color={"blue"}/></strong>
								</ModalBody>
								<ModalFooter>
									<PaypalExpressBtn style={style} env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />{' '}
									<Button color="secondary" onClick={this.closeModal}>Cancel</Button>
								</ModalFooter>
							</Modal>
						</Col>
					</Row>
						<br/>
				</Container>
					<br/>
			</div>
			);
	}
}


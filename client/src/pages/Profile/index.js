import React from 'react';
import "./style.css";
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa'
import axios from 'axios';
import {Link} from 'react-router-dom';
import UserNav from "../../components/UserNav";
import {  Table, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col, Form, FormGroup, Row, Input, Label, Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: "",
			userId: "",
			userFirstName: "",
			userLastName: "",
			userPhoneNumber: "",
			userAddress: "",
			userAddress2: "",
			userCity: "",
			userState: "",
			userZip: "",
			userUserName: "",
			appt:[],
			upcomingAppt: [],
			comment: "",
			review:{
				name: "",
				comment: "",
				user: ""
			},
			edit: false,
			cancel: "",
			modal: false,
			modalCancel: false
		}
		this.toggle = this.toggle.bind(this);
		this.toggleCancel = this.toggleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	  }

	toggle() {
		this.setState({
		  modal: !this.state.modal
		});
	  }

	toggleCancel() {
		this.setState({
			modalCancel: !this.state.modalCancel,
			cancel: this.state.upcomingAppt[0]._id
		});
		console.log(this.state.cancel)
	}

	componentDidMount = () =>{
		let upcoming = []
		axios.get("/api/findAppt/" + this.props.auth.userId).then((result)=>{
			this.setState({
				appt: result.data,
			})
			console.log(this.state.cancel)
			// console.log(moment().format('LLLL'))
			// console.log(result.data)
			for(let i = 0; i < result.data.length; i++){
				// console.log(result.data[i].start)
				if(result.data[i].start > moment().toISOString()){
					upcoming.push(result.data[i])
					

				}
			}
			this.setState({
				upcomingAppt: upcoming.reverse()
			})
			console.log(this.state.upcomingAppt)
			
		});
		axios.get("/api/findUser/" + this.props.auth.username).then((result)=>{
			const firstName = result.data[0].firstName.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
			const lastName = result.data[0].lastName.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
			this.setState({
				fullName: firstName+" "+lastName,
				userId: result.data[0]._id,
				userFirstName: firstName,
				userLastName: lastName,
				userPhoneNumber: result.data[0].phoneNumber,
				userAddress: result.data[0].address,
				userAddress2: result.data[0].address2,
				userCity: result.data[0].city,
				userState: result.data[0].state,
				userZip: result.data[0].zip,
				userUserName: result.data[0].username
			})
		});
	}

	handleChange = (event) => {
		const {name, value} = event.target;   
		this.setState({
		  [name]: value
		});
		console.log(name, value)
	  }

	  handleSubmit = (event) => {
		event.preventDefault();
		const review = {
		 name: this.state.userFirstName,
		 comment: this.state.comment,
		 user: this.state.userId
		}
		axios.post("api/createReview/", review).then((result) => {
			this.setState({
				comment: ""
			})
		})
	}

	handleCancel = (event) => {
		event.preventDefault();
		this.setState({
			modalCancel: !this.state.modalCancel
		})
		let upcoming = [];
		let cancel = {
			_id: this.state.cancel
		}
		console.log(this.state.cancel)
		axios.post("api/deleteAppt/", cancel).then((result) => {
			console.log(result)
			this.setState({
				cancel: ""
			})
		})
		axios.get("/api/findAppt/" + this.props.auth.userId).then((result)=>{
			this.setState({
				appt: result.data
			})			
			for(let i = 0; i < result.data.length; i++){
				// console.log(result.data[i].start)
				if(result.data[i].start > moment().toISOString()){
					upcoming.push(result.data[i])
				}
			}
			this.setState({
				upcomingAppt: upcoming.reverse()
			})
			console.log(this.state.upcomingAppt)
		});
	}

	handleEdit = (event) => {
		event.preventDefault();
		let editUser = {}
		if(this.state.edit === "name"){
			editUser = {
				_id: this.state.userId,
				firstName: this.state.firstName,
				lastName: this.state.lastName
			}
		}else if(this.state.edit === "address"){
			editUser = {
				_id: this.state.userId,
				address: this.state.address,
				city: this.state.city,
				state: this.state.state,
				zip: this.state.zip
			}
		}else if(this.state.edit === "phoneNumber"){
			editUser = {
				_id: this.state.userId,
				phoneNumber: this.state.phoneNumber,
			}
		}else if(this.state.edit === "email"){
			editUser = {
				_id: this.state.userId,
				username: this.state.username,
			}
		}
		console.log(editUser)
		axios.post("api/updateUser/", editUser).then((result) => {
			console.log(result)
			this.setState({
				modal: !this.state.modal
			  });
		})
		axios.get("/api/findUser/" + this.props.auth.username).then((result)=>{
			const firstName = result.data[0].firstName.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
			const lastName = result.data[0].lastName.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
			this.setState({
				fullName: firstName+" "+lastName,
				userId: result.data[0]._id,
				userFirstName: firstName,
				userLastName: lastName,
				userPhoneNumber: result.data[0].phoneNumber,
				userAddress: result.data[0].address,
				userAddress2: result.data[0].address2,
				userCity: result.data[0].city,
				userState: result.data[0].state,
				userZip: result.data[0].zip,
				userUserName: result.data[0].username
			})
		});
	}

	render() {
		const stateInitials = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NC","ND","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
		return(
		<div>
			<UserNav handleLogout={this.props.handleLogout}>
				{this.state.userFirstName}
			</UserNav>
			<Container>
				<h1 className="mt-4 mb-3">Profile</h1>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Profile</li>
					<li className="breadcrumb-item">
						<Link to="/SetAppointment">Schedule Appointment</Link>
					</li>
				</ol>
				
						{(this.state.upcomingAppt[0])
							? <h5 className="text-center">Your next Appointment</h5>
							: <p></p>
						}	
						{(this.state.upcomingAppt[0])
							? 				
							<Table className="table" bordered>
								<thead>
									<tr>
										<th>Date</th>
										<th>Service</th>
										<th>Price</th>
										<th>Appt Made On</th>
										<th>Click to cancel</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{moment(this.state.upcomingAppt[0].start).format('LLLL')}</td>
										<td>{this.state.upcomingAppt[0].title}</td>
										<td>{this.state.upcomingAppt[0].price}</td>
										<td>{moment(this.state.upcomingAppt[0].createdAt).format('LLLL')}</td>
										<td><Button color="danger" size="small" onClick={this.toggleCancel}>Cancel</Button></td>
									</tr>
								</tbody>
							</Table>
							: <p></p>
						}
				
      			
				<Row>
					<Col lg="6" md="12" sm="12">
						<Card className="card-register mx-auto mt-5" outline color="info">
							<CardHeader className="bg-secondary text-white"><b><FontAwesome.FaListAlt /> Customer Information</b></CardHeader>
							<CardBody>
							<p><b> * Select which field you would like to edit</b></p>
							<hr/>
								<Form>
								<FormGroup tag="fieldset">
									<FormGroup check>
          								<Label check>
											<Input type="radio" name="edit" value="name" onChange={this.handleChange}/><p><b>Name:</b> {this.state.userFirstName + " " + this.state.userLastName}</p>
										</Label>
        							</FormGroup>
									<FormGroup check>
          								<Label check>
											<Input type="radio" name="edit" value="address" onChange={this.handleChange}/><p><b>Address:</b> {this.state.userAddress + "  " + this.state.userCity + "," + this.state.userState + "  " + this.state.userZip}</p>
										</Label>
        							</FormGroup>
									<FormGroup check>
          								<Label check>		
											<Input type="radio" name="edit" value="phoneNumber" onChange={this.handleChange}/><p><b>Phone Number:</b> {this.state.userPhoneNumber}</p>
										</Label>
        							</FormGroup>
									<FormGroup check>
          								<Label check>
											<Input type="radio" name="edit" value="email" onChange={this.handleChange}/><p><b>Email:</b> {this.state.userUserName}</p>
										</Label>
        							</FormGroup>
									</FormGroup>
								</Form>
							</CardBody>
							<CardFooter>
								<Button color="danger" size="large" onClick={this.toggle}><FontAwesome.FaEdit /> Edit</Button>
							</CardFooter>
						</Card>
					</Col>
					<Col lg="6" md="12" sm="12">
						<Card className="card-register mx-auto mt-5" outline color="info">
							<CardHeader className="bg-secondary text-white"><b><FontAwesome.FaComment /> Leave A Review</b></CardHeader>
							<CardBody>
								<Form>
									<FormGroup>
										<p><b> * Type inside the box then click Submit to leave your Review</b></p>
										<Input type="textarea" rows="8" cols="100" name="comment" id="exampleText" value={this.state.comment} onChange={this.handleChange}/>
									</FormGroup>
									<Input className="btn btn-primary" type='submit' onClick={this.handleSubmit}/>								
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<br/>
					<h5 className="text-centered">* Appointment History</h5>
					<hr/>
				<br/>
				
					<Table bordered>
						<thead>
						<tr>
							<th>Date</th>
							<th>Service</th>
							<th>Price</th>
							<th>Appt Made On</th>
						</tr>
						</thead>
						<tbody>
							{(this.state.appt.length)
								? this.state.appt.map((x) => (
									<tr>
										<td>{moment(x.start).format('LLLL')}</td>
										<td>{x.title}</td>
										<td>{x.price}</td>
										<td>{moment(x.createdAt).format('LLLL')}</td>
									</tr>
								))
								:	<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
							}
						</tbody>
					</Table>
				
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>* Edit Appropriate Fields</ModalHeader>
					<ModalBody>				
							{this.state.edit === "name" ? 
							<Form>
								<FormGroup>
									<Row>
										<Col md="6">
											<Label for="firstName">First name</Label>
											<Input onChange = {this.handleChange} name="firstName" type="text" aria-describedby="nameHelp" placholder="Please enter your first name"/>
										</Col>
										<Col md="6">
											<Label for="lastName">Last name</Label>
											<Input onChange = {this.handleChange} name="lastName" type="text" aria-describedby="nameHelp" placholder="Please enter your last name"/>
										</Col>
									</Row>
								</FormGroup>
							</Form>
							: this.state.edit === "address" ?
							<Form>
								<FormGroup>
									<Label for="address">Address</Label>
									<Input className="form-control" onChange = {this.handleChange} name="address" placeholder="Please enter your Aaddress"/>
								</FormGroup>
								<FormGroup>
									<Label for="address2">Address 2</Label>
									<Input className="form-control" onChange = {this.handleChange} name="address2" placeholder="Apt/Suite"/>
								</FormGroup>
								<Row>
									<FormGroup className="col-md-6">
										<Label for="city">City</Label>
										<Input className="form-control" onChange = {this.handleChange} name="city" placeholder="Please enter your city"/>
									</FormGroup>
									<FormGroup className="col-md-3">
										<Label for="state">State</Label>
										<Input type="select" onChange = {this.handleChange} name="state" className="form-control" placeholder="Please select a state">
											<option ></option>
											{(stateInitials.length)
											? stateInitials.map((state) => (
											(state === this.state.userState) ? 
											<option selected value={state} key={state}>{state}</option> 
											: <option value={state} key={state}>{state}</option>)
											)
											: <option>no value</option>
											}
										</Input>
									</FormGroup>
									<FormGroup className="col-md-3">
										<Label for="zip">Zip</Label>
										<Input className="form-control" onChange = {this.handleChange} name="zip" placeholder="Please enter your zip code"/>
									</FormGroup>
								</Row>
							</Form>
							: this.state.edit === "phoneNumber" ?
							<Form>
								<FormGroup>
									<Label for="phoneNumber">Phone Number</Label>
									<Input className="form-control" onChange = {this.handleChange} name="phoneNumber" placeholder="Please enter your phone number" pattern="\(?\d+\)?[-.\s]?\d+[-.\s]?\d+"/>
								</FormGroup>
							</Form>
							: this.state.edit === "email" ?
							<Form>
								<FormGroup>
									<Label for="username">Email</Label>
									<Input className="form-control" onChange = {this.handleChange} name='username' aria-describedby="emailHelp" placeholder="Please enter your email address"/>
								</FormGroup>
							</Form>
							: <p> please select field</p>}
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.handleEdit}>Make Changes</Button>{' '}
						<Button color="info" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
				<Modal isOpen={this.state.modalCancel} toggle={this.toggleCancel}>
					<ModalBody>
						<h5 className="text-center"><b>Are you sure you want to cancel your appointment</b></h5>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.handleCancel}>Yes</Button>{' '}
						<Button color="info" onClick={this.toggleCancel}>No</Button>
					</ModalFooter>
				</Modal>
			</Container>
			<br/>
		</div>
	);
  }
}

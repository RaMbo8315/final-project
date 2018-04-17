import React from 'react';
import "./style.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import UserNav from "../../components/UserNav";
import { Container, Col, Form, FormGroup, Row, Input, Label, Card, CardBody, CardHeader } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appoint: [],
			fullName: "",
			client:{
				clientId: "",
				clientFirstName: "",
				clientLastName: "",
				clientPhoneNumber: "",
				clientAddress: "",
				clientAddress2: "",
				clientCity: "",
				clientState: "",
				clientZip: "",
				clientUserName: ""
			}
		}
		// this.handleSubmit = this.handleSubmit.bind(this);
	  }

	componentDidMount = () =>{
		axios.get("/api/allAppt").then((result)=>{
			this.setState({
				appoint: result.data
			})
		});
		axios.get("/api/findClient/" + this.props.auth.username).then((result)=>{
			const firstName = result.data[0].firstName.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
			const lastName = result.data[0].lastName.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
			this.setState({
				fullName: firstName+" "+lastName,
				client:{
					clientId: result.data[0]._id,
					clientFirstName: firstName,
					clientLastName: lastName,
					clientPhoneNumber: result.data[0].phoneNumber,
					clientAddress: result.data[0].address,
					clientAddress2: result.data[0].address2,
					clientCity: result.data[0].city,
					clientState: result.data[0].state,
					clientZip: result.data[0].zip,
					clientUserName: result.data[0].username
				}
			})
			console.log(this.state.client)
		});
	}

	handleChange = (event) => {
		const {name, value} = event.target;  
		console.log(name)  
			// Set the state for the appropriate input field
		this.setState({
		  [name]: value
		});
	  }

	  handleSubmit = (event) => {
		event.preventDefault();
		const updateClient = {
			firstName: this.state.clientFirstName,
			lastName: this.state.clientLastName,
			phoneNumber: this.state.clientPhoneNumber,
			address: this.state.clientAddress,
			address2: this.state.clientAdrress2,
			city: this.state.clientCity,
			state: this.state.clientState,
			zip: this.state.clientZip,
		  	username: this.state.clientUserName,
		}; 
		console.log(updateClient)
		// const {name} = event.target;
		axios.post("api/updateClient" + updateClient).then((data) => {
			console.log(data)
		});
	  }

	render() {
		const loggedIn = this.props.auth.isAuthenticated;
		console.log(loggedIn)
		const stateInitials = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NC","ND","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
	return(
		<div>
			<UserNav handleLogout={this.props.handleLogout}>
				{this.state.client.clientFirstName}
			</UserNav>
			<Container>
				<h1 className="mt-4 mb-3">Profile</h1>
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">Profile</li>
					<li className="breadcrumb-item">
						<Link to="/SetAppointment">Schedule Appointment</Link>
					</li>
				</ol>
				<Row>
					<Col lg="5">
					<br/>
					<p><strong>* You can update your profile by changing only the fields that are necessary, when you are done submit your changes</strong></p> 
					<hr/>
					<Card className="card-register mx-auto mt-5 bg-gray" outline color="info">
						<CardHeader>Edit your Profile</CardHeader>
						<CardBody>
							<Form id="register">
								<FormGroup>
									<Row>
										<Col md="6">
											<Label for="clientFirstName">First name</Label>
											<Input className="form-control" onChange = {this.handleChange} name="clientFirstName" type="text" aria-describedby="nameHelp" placeholder={this.state.client.clientFirstName}/>
										</Col>
										<Col md="6">
											<Label for="clientLastName">Last name</Label>
											<Input className="form-control" onChange = {this.handleChange} name="clientLastName" type="text" aria-describedby="nameHelp" placeholder={this.state.client.clientLastName}/>
										</Col>
									</Row>
								</FormGroup>
								<FormGroup>
									<Label for="clientPhoneNumber">Phone Number</Label>
									<Input className="form-control" onChange = {this.handleChange} name="clientPhoneNumber" placeholder={this.state.client.clientPhoneNumber} pattern="\(?\d+\)?[-.\s]?\d+[-.\s]?\d+"/>
								</FormGroup>
								<FormGroup>
									<Label for="clientAddress">Address</Label>
									<Input className="form-control" onChange = {this.handleChange} name="clientAddress" placeholder={this.state.client.clientAddress}/>
								</FormGroup>
								<FormGroup>
									<Label for="clientAddress2">Address 2</Label>
									<Input className="form-control" onChange = {this.handleChange} name="clientAddress2" placeholder={this.state.client.clientAddress2}/>
								</FormGroup>
								<Row>
									<FormGroup className="col-md-6">
										<Label for="clientCity">City</Label>
										<Input className="form-control" onChange = {this.handleChange} name="clientCity" placeholder={this.state.client.clientCity}/>
									</FormGroup>
									<FormGroup className="col-md-4">
										<Label for="clientState">State</Label>
										<Input type="select" onChange = {this.handleChange} name="clientState" className="form-control" placeholder={this.state.client.clientState}>
											<option ></option>
											{(stateInitials.length)
											? stateInitials.map((state) => (
											(state === this.state.client.clientState ? 
											<option selected value={state} key={state}>{state}</option> 
											: <option value={state} key={state}>{state}</option>)
											))
											: <option>no value</option>
											}
										</Input>
									</FormGroup>
									<FormGroup className="col-md-2">
										<Label for="clientZip">Zip</Label>
										<Input className="form-control" onChange = {this.handleChange} name="clientZip" placeholder={this.state.client.clientZip} />
									</FormGroup>
								</Row>
								<FormGroup>
									<Label for="clientUserName">Email address</Label>
									<Input className="form-control" onChange = {this.handleChange} name='clientUserName' aria-describedby="emailHelp" placeholder={this.state.client.clientUserName}/>
								</FormGroup>
								<Input className="btn btn-primary btn-block" type = 'submit' onClick = {this.handleSubmit}/>
							</Form>
						</CardBody>
					</Card>
					</Col>
					<Col lg="8">
					</Col>
				</Row>
			</Container>
			<br/>
		</div>
	);
  }
}

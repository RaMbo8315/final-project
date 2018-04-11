import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";
import { Container, Col, Form, FormGroup, Row, Input, Label, Card, CardBody, CardHeader } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Signup extends React.Component {
	render() {
	return(
	<div>
		<Container>
			<Card className="card-register mx-auto mt-5 bg-gray">
				<CardHeader>Register an Account</CardHeader>
				<CardBody>
					<Form id="register">
						<FormGroup>
							<Row>
								<Col md="6">
									<Label for="firstName">First name</Label>
									<Input className="form-control" value = {this.props.firstname} onChange = {this.props.handleChange} name="firstName" type="text" aria-describedby="nameHelp" placeholder="Enter first name"/>
								</Col>
								<Col md="6">
									<Label for="lastName">Last name</Label>
									<Input className="form-control" value = {this.props.lastname} onChange = {this.props.handleChange} name="lastName" type="text" aria-describedby="nameHelp" placeholder="Enter last name"/>
								</Col>
							</Row>
						</FormGroup>
						<FormGroup>
							<Label for="phoneNumber">Phone Number</Label>
							<Input type="telephone" className="form-control" value = {this.props.phonenumber} onChange = {this.props.handleChange} name="phoneNumber" placeholder="555-555-5555" pattern="\(?\d+\)?[-.\s]?\d+[-.\s]?\d+"/>
						</FormGroup>
						<FormGroup>
							<Label for="address">Address</Label>
							<Input type="text" className="form-control" value = {this.props.address} onChange = {this.props.handleChange} name="address" placeholder="1234 Main St"/>
						</FormGroup>
						<FormGroup>
							<Label for="address2">Address 2</Label>
							<Input type="text" className="form-control" value = {this.props.address2} onChange = {this.props.handleChange} name="address2" placeholder="Apartment, studio, or floor"/>
						</FormGroup>
						<Row>
							<FormGroup className="col-md-6">
								<Label for="city">City</Label>
								<Input type="text" className="form-control" value = {this.props.city} onChange = {this.props.handleChange} name="city"/>
							</FormGroup>
							<FormGroup className="col-md-4">
								<Label for="state">State</Label>
								<Input type="select" value = {this.props.state} onChange = {this.props.handleChange} name="state" className="form-control">
									<option selected></option>
									<option value="AL">AL</option>
									<option value="AK">AK</option>
									<option value="AZ">AZ</option>
									<option value="AR">AR</option>
									<option value="CA">CA</option>
									<option value="CO">CO</option>
									<option value="CT">CT</option>
									<option value="DE">DE</option>
									<option value="DC">DC</option>
									<option value="FL">FL</option>
									<option value="GA">GA</option>
									<option value="HI">HI</option>
									<option value="ID">ID</option>
									<option value="IL">IL</option>
									<option value="IN">IN</option>
									<option value="IA">IA</option>
									<option value="KS">KS</option>
									<option value="KY">KY</option>
									<option value="LA">LA</option>
									<option value="ME">ME</option>
									<option value="MD">MD</option>
									<option value="MA">MA</option>
									<option value="MI">MI</option>
									<option value="MN">MN</option>
									<option value="MS">MS</option>
									<option value="MO">MO</option>
									<option value="MT">MT</option>
									<option value="NE">NE</option>
									<option value="NV">NV</option>
									<option value="NH">NH</option>
									<option value="NJ">NJ</option>
									<option value="NM">NM</option>
									<option value="NY">NY</option>
									<option value="NC">NC</option>
									<option value="ND">ND</option>
									<option value="OH">OH</option>
									<option value="OK">OK</option>
									<option value="OR">OR</option>
									<option value="PA">PA</option>
									<option value="RI">RI</option>
									<option value="SC">SC</option>
									<option value="SD">SD</option>
									<option value="TN">TN</option>
									<option value="TX">TX</option>
									<option value="UT">UT</option>
									<option value="VT">VT</option>
									<option value="VA">VA</option>
									<option value="WA">WA</option>
									<option value="WV">WV</option>
									<option value="WI">WI</option>
									<option value="WY">WY</option>
								</Input>
							</FormGroup>
							<FormGroup className="col-md-2">
								<Label for="zip">Zip</Label>
								<Input type="text" className="form-control" value = {this.props.zip} onChange = {this.props.handleChange} name="zip"/>
							</FormGroup>
						</Row>
						<FormGroup>
							<Label for="username">Email address</Label>
							<Input className="form-control" value = {this.props.username} onChange = {this.props.handleChange} name='username' type="email" aria-describedby="emailHelp" placeholder="Enter email"/>
						</FormGroup>
						<FormGroup>
							<Row>
								<Col md="6">
									<Label for="password">Password</Label>
									<Input className="form-control" value = {this.props.password} onChange = {this.props.handleChange} name='password' type="password" placeholder="Password"/>
								</Col>
								<Col md="6">
									<Label for="confirmPassword">Confirm password</Label>
									<Input className="form-control" name="confirmPassword" type="password" placeholder="Confirm password"/>
								</Col>
							</Row>
						</FormGroup>
						<Input className="btn btn-primary btn-block" type = 'submit' name = "/auth/signup" onClick = {this.props.handleSubmit}/>
					</Form>
					<div className="text-center">
						<Link className="d-block small mt-3" to="/login">Login Page</Link>
						{/* <Link className="d-block small" to="">Forgot Password? </Link> */}
					</div>
				</CardBody>
			</Card>
		</Container>
		<br/>
	</div>
	);
  }
}

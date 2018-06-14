import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";
import * as FontAwesome from 'react-icons/lib/fa';
import MdWatchLater from 'react-icons/lib/md/watch-later';
import HomeNav from "../../components/HomeNav";
import Map from "../../components/Map";
import {
	Container,
	Col, 
	Form, 
	Row,
	Button,
	Input,
	Label,
	FormGroup, 
	Card,
	CardBody
	} from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";



export default class Contact extends React.Component {
	render() {
	return(
		<div>
			<HomeNav/>
			<br/>
			<Container>
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/">Home</Link>
					</li>
					<li className="breadcrumb-item">
						<Link to="/About">About</Link>
					</li>
					<li className="breadcrumb-item">
						<Link to="/Services">Services</Link>
					</li>
					<li className="breadcrumb-item active">Contact</li>
				</ol>
				<Row>
					<Col lg="8" md="6" sm="12">
						<Map
							isMarkerShown
							googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBufzndAjvNelI-14dxtA3-BqKqnvAaKSg&v=3.exp&libraries=geometry,drawing,places"
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `400px` }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
					</Col>
					<Col lg="4" md="6" sm="12">
						<Card className="rounded" outline color="info">
							<CardBody>
								<h3>Contact Details</h3>
								<p>
									56 W. Illiana st.
									<br/>Orlando, FL 32806
									<br/>
								</p>
								<p>
									<FontAwesome.FaPhoneSquare /> (407) 446 - 3684
								</p>
								<p>
									<FontAwesome.FaEnvelope /> hurena1583@gmail.com						
								</p>
								<p>
									<MdWatchLater/> Monday - Saturday: 8:00 AM to 5:00 PM <br/>
									Sunday : By appointment
								</p>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<br/>
				<Row>
					<Col lg="6" md="12" sm="12">
						<Card className="rounded" outline color="info">
							<CardBody>
								<h3>Send us a Message</h3>
								<Form name="sentMessage" id="contactForm" novalidate>
									<FormGroup>
										<div class="controls">
											<Label>Name:</Label>
											<Input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name."/>
											<p class="help-block"></p>
										</div>
									</FormGroup>
									<FormGroup>
										<div class="controls">
										<Label>Phone Number:</Label>
										<Input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number."/>
										</div>
									</FormGroup>
									<div class="control-group form-group">
										<div class="controls">
											<Label>Email Address:</Label>
											<Input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address."/>
										</div>
									</div>
									<FormGroup>
										<div class="controls">
											<Label>Message:</Label>
											<Input type="textarea" rows="10" cols="100" id="message" required data-validation-required-message="Please enter your message"/>
										</div>
									</FormGroup>
									<div id="success"></div>
									<Button className="btn btn-primary">Send Message</Button>
								</Form>
							</CardBody>
						</Card>
						<br/>
					</Col>
				</Row>
      		</Container>
		</div>
	);
}
}
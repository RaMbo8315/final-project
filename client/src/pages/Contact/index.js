import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";
import * as FontAwesome from 'react-icons/lib/fa'
import MdWatchLater from 'react-icons/lib/md/watch-later'
import {
	Container,
	Col, 
	Form, 
	Row,
	Button,
	Input,
	Label,
	} from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Contact extends React.Component {
	render() {
	return(
		<div>
			<Container>
				<h1 className="mt-4 mb-3">Contact{" "}
				<small>Subheading</small>
				</h1>
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/">Home</Link>
					</li>
					<li className="breadcrumb-item active">Contact</li>
				</ol>
				<Row>
					<Col lg="8" md="4">
						<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
					</Col>
					<Col lg="4" md="4">
						<h3>Contact Details</h3>
						<p>
							3481 Melrose Place
							<br/>Beverly Hills, CA 90210
							<br/>
						</p>
						<p>
							<FontAwesome.FaPhoneSquare /> (123) 456-7890
						</p>
						<p>
							<FontAwesome.FaEnvelope />
							<a href="mailto:name@example.com"> name@example.com
							</a>
						</p>
						<p>
							<MdWatchLater/> Monday - Saturday: 8:00 AM to 5:00 PM <br/>
							Sunday : By appointment
						</p>
					</Col>
				</Row>
			
				<Row>
					<Col lg="8" md="4">
						<h3>Send us a Message</h3>
						<Form name="sentMessage" id="contactForm" novalidate>
							<div class="control-group form-group">
								<div class="controls">
									<Label>Full Name:</Label>
									<Input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name."/>
									<p class="help-block"></p>
								</div>
							</div>
							<div class="control-group form-group">
								<div class="controls">
								<Label>Phone Number:</Label>
								<Input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number."/>
								</div>
							</div>
							<div class="control-group form-group">
								<div class="controls">
									<Label>Email Address:</Label>
									<Input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address."/>
								</div>
							</div>
							<div class="control-group form-group">
								<div class="controls">
									<Label>Message:</Label>
									<textarea rows="10" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999"></textarea>
								</div>
							</div>
							<div id="success"></div>
							<Button type="submit" className="btn btn-primary" name="/api/createMessage">Send Message</Button>
						</Form>
						<br/>
					</Col>
				</Row>
      		</Container>
		</div>
	);
}
}
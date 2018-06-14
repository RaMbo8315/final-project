import React from 'react';
import "./style.css";
import Image from "../../images/home.jpg"
import * as FontAwesome from 'react-icons/lib/fa'
import {Link} from 'react-router-dom';
import HomeNav from "../../components/HomeNav";
import { Container, Row, Col } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Home extends React.Component {
	render() {
	return(
		<div>
			<HomeNav
			username={this.props.username}
			password={this.props.password}
			handleChange={this.props.handleChange}
			handleSubmit={this.props.handleSubmit}
			/>
			<br/>
				<Container>
					{/* <h1 className="mt-4 mb-3">Home</h1> */}
					<ol className="breadcrumb">
						<li className="breadcrumb-item active">Home</li>
						<li className="breadcrumb-item">
							<Link to="/About">About</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="/Services">Services</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="/Contact">Contact</Link>
						</li>
					</ol>
					<Row my="4">
						<Col lg="8">
							<img className="img-fluid" src={Image} alt="Car"/>
						</Col>
						<Col lg="4">
							<h2 className="text-center">Full Auto Detail</h2>
							<hr/>
							<p>
								This is a business website designed with an auto detail company in mind and developed with a M.E.R.N. 
								stack. Visitors can learn about the business, see what services they provide, find out there contact
								information, see where the business is located with google maps, and leave a message if they have any questions. 
								Visitors can also sign up to have the ability to schedule or cancel appointments, pay for services using PayPal,  
								and leave a review of the services they recieved. I am working on adding a Admin side where the business
								can manage appointments, manage reviews, manage customer information, and view messages left by visitors.

								{/* The site consist of an home page where you can briefly tell visitors about you business.
								An about page so you can go more in depth about the business, such as your history and experience;
								visitors will also be able to read reviews left by your customers. A services page laying out what
								you have to offer. A contact page where visitors can see wher your located on a google map, your 
								contact information and they can also leave you a message if they have any questions. Visitors
								can also sign up to have the ability schedule or cancel appointments, pay for services, and leave a review of the
								services you provided. */}
							</p>
							<Link className="btn btn-primary btn-lg" to="/Signup"><FontAwesome.FaArrowCircleUp /> Sign Up</Link>
						</Col>
					</Row>
					<br/>
				</Container>
		</div>
	);
  }
}

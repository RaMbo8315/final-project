import React from 'react';
import "./style.css";
import Image from "../../images/home.jpg"
import * as FontAwesome from 'react-icons/lib/fa'
import {Link} from 'react-router-dom';
import HomeNav from "../../components/HomeNav";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

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
							<Link to="/Portfolio">Portfolio</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="/Testimonials">Testimonials</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="/Contact">Contact</Link>
						</li>
					</ol>
					<Row my="4">
						<Col lg="8">
							<img className="img-fluid rounded" src={Image} alt=""/>
						</Col>
						<Col lg="4">
							<h1>Business Name or Tagline</h1>
							<p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
							<Link className="btn btn-primary btn-lg" to="/Signup"><FontAwesome.FaArrowCircleUp /> Sign Up</Link>
						</Col>
					</Row>
					<Card className="text-white bg-secondary my-4 text-center">
						<CardBody>
							<p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
						</CardBody>
					</Card>
				</Container>
		</div>
	);
  }
}

import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import HomeNav from "../../components/HomeNav";
import { Container,
		Row,
		Col,
		Card,
		CardBody } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Services extends React.Component {
	
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
						<li className="breadcrumb-item active">Services</li>
						<li className="breadcrumb-item">
							<Link to="/Contact">Contact</Link>
						</li>
					</ol>
					<br/>
					<Row>
						<Col lg="3" md="12" sm="12">
							<Card className="rounded" outline color="info">
								<CardBody>
									<h5>Wash - $25</h5>
									<hr/>
									<ul>
										<li>Hand Wash</li><br/>
										<li>Windows</li><br/>
										<li>Tire shine</li><br/>
										<li>Vacuum</li>
									</ul>
								</CardBody>
							</Card>
						</Col>
						<Col lg="3" md="12" sm="12">
							<Card className="rounded" outline color="info">
								<CardBody>
								<h5>Interior - $70</h5>
								<hr/>
								<ul>
									<li>Wash</li><br/>
									<li>Clean Leather or Cloth Seats and Condition</li><br/>
									<li>Scrub all Interior Panels</li><br/>
									<li>Shampoo Carpet</li>
								</ul>
								</CardBody>
							</Card>
						</Col>
						<Col lg="3" md="12" sm="12">
							<Card className="rounded" outline color="info">
								<CardBody>
								<h5>Exterior - $90</h5>
								<hr/>
								<ul>
									<li>Wash</li><br/>
									<li>Clay Bar</li><br/>
									<li>Polish</li><br/>
									<li>Wax</li>
								</ul>
								</CardBody>
							</Card>
						</Col>
						<Col lg="3" md="12" sm="12">
							<Card className="rounded" outline color="info">
								<CardBody>
								<h5>Full Detail</h5>
								<hr/>
								<ul>
									<li>Wash</li><br/>
									<li>Interior</li><br/>
									<li>Exterior</li><br/>
									<li>Engine Detail</li>
								</ul>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
		</div>
	);
}
}

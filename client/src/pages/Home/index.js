import React from 'react';
import "./style.css";
import Image from "../../images/home.jpg"
import BootNav from "../../components/Nav";
import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import {Link} from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Home extends React.Component {
	render() {
	return(
		<div>
			<BootNav/>
			<br/>
				<Container>
								<Row my="4">
									<Col lg="8">
										<img className="img-fluid rounded" src={Image} alt=""/>
									</Col>
									<Col lg="4">
										<h1>Business Name or Tagline</h1>
										<p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
										<Link className="btn btn-primary btn-lg" to="">Call to Action!</Link>
									</Col>
								</Row>
								<Card className="text-white bg-secondary my-4 text-center">
									<CardBody>
										<p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
									</CardBody>
								</Card>
				</Container>
				{/* <br/> */}
			<Footer/>
		</div>
	);
  }
}

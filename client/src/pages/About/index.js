import React from 'react';
import "./style.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';
import HomeNav from "../../components/HomeNav";
import { Container, Card, CardBody, CardFooter, Row, Col } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		}
	}
	componentDidMount = () =>{
		axios.get("/api/allReviews/").then((result)=>{
			
			this.setState({
				reviews: result.data
			})
			console.log(this.state.reviews)
		});
		
	}
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
				<li className="breadcrumb-item active">About</li>
				<li className="breadcrumb-item">
					<Link to="/Services">Services</Link>
				</li>
				<li className="breadcrumb-item">
					<Link to="/Contact">Contact</Link>
				</li>
			</ol>
      		<Row>
        		<Col lg="6">
					{(this.state.reviews.length)  
						? 
							this.state.reviews.map((x) => (
								<div>
									<Card outline color="info">
										<CardBody>
											<h5>{x.name}</h5>
											<hr/>
											<p>{x.comment}</p>
										</CardBody>
										<CardFooter>
											Posted on {moment(x.createdAt).format('LL')}
										</CardFooter>
									</Card>
									<br/>
								</div>
							))
						: 
							<p></p>
					}
        		</Col>
        		<Col lg="6">
					<h2>About Full Auto Detail</h2>
					<p>
						On this page the business will be able to go in depth about work history and experience. 
						Visitors will also be able to view all the reviews left by previous customers. I will use this 
						page to expand more on what went into this site.
					</p>
					<hr/>
					<h5>This is a list of all the NPM packages that were used to help build this site</h5>
					<br/>
					<Card className="bg-light rounded" outline color="info">
						<CardBody>
							<ul>
								<li><b>Axios</b> - used to make all the get and post request</li><br/>
								<li><b>Moment</b> - used to manipulate time while making appointments and displaying appointments</li><br/>
								<li><b>Reactstrap</b> - a package for creating React apps with bootstrap components</li><br/>
								<li><b>react-Icons</b> - used for displaying all the fontawesome icon on the website</li><br/>
								<li><b>react-google-maps</b> - used for the map on the contact page</li><br/>
								<li><b>react-big-calendar</b> - used for the calendar that displays and helps make appointments</li><br/>
								<li><b>react-paypal-express</b> - chectout - this allows customers to make payments using paypal</li><br/>
								<li><b>@mahjongg/mern-mvc</b> - this makes creating a react app fast and easy by building out the folder structure and also sets up passport for you</li><br/>
								<li><b>@mahjongg/new-component</b> - helps with creating new react components</li>
							</ul>
						</CardBody>
					</Card>
        		</Col>
      		</Row>
			<br/>
    	</Container>
		<br/>
	</div>
	);
  }
}

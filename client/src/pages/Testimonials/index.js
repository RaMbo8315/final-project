import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import HomeNav from "../../components/HomeNav";
import { Container } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Testimonials extends React.Component {
	
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
						<li className="breadcrumb-item">
							<Link to="/Portfolio">Portfolio</Link>
						</li>
						<li className="breadcrumb-item active">Testimonials</li>
						<li className="breadcrumb-item">
							<Link to="/Contact">Contact</Link>
						</li>
					</ol>
				</Container>
		</div>
	);
}
}

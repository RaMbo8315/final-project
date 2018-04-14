import React from 'react';
import "./style.css";
// import axios from 'axios';
import {Link} from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
	Button
	} from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class HomeNav extends React.Component {
	constructor(props) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.state = {
		  isOpen: false
		};
	}
	toggle() {
		this.setState({
		  isOpen: !this.state.isOpen
		});
	}
		
		// handleLogout = (event) => {
		// 	event.preventDefault();
		// 	axios.get("/auth/logout").then((result)=>{
		// 		this.setState({
		// 			auth:{
		// 				userId: "",
		// 				username: "",
		// 				isAuthenticated: false
		// 			}
		// 		});
		// 	})
		// };

	render(){
	return(
		<div>
			<Navbar color="dark" dark expand="md lg" fixed="top">
				<Container>
					<NavbarBrand href="/">Full Auto Detail</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink tag={Link} to="/CustomerHome">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/Portfolio">Portfolio</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/Testimonials">Testimonials</NavLink>
						</NavItem>
						<NavItem>
							<Button onClick={this.props.handleLogout} ><FontAwesome.FaSignOut />Log out</Button>
						</NavItem>
					</Nav>
					</Collapse>
				</Container>
		  	</Navbar>
		</div>
	);
}
}

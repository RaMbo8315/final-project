import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
	} from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class BootNav extends React.Component {
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
	render() {
	  return (
		<div>
		  <Navbar color="dark" dark expand="md lg" fixed="top">
		  	<Container>
				<NavbarBrand href="/">Full Auto Detail</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
				  <Nav className="ml-auto" navbar>
					<NavItem>
				  		<NavLink tag={Link} to="/Home">Home</NavLink>
					</NavItem>
					<NavItem>
				  		<NavLink tag={Link} to="/About">About</NavLink>
					</NavItem>
					<NavItem>
				  		<NavLink tag={Link} to="/Portfolio">Portfolio</NavLink>
					</NavItem>
					<NavItem>
				  		<NavLink tag={Link} to="/Testimonials">Testimonials</NavLink>
					</NavItem>
					<NavItem>
				  		<NavLink >Services</NavLink>
					</NavItem>
					<NavItem>
				  		<NavLink >Contact</NavLink>
					</NavItem>
					<NavItem>
				  		<NavLink tag={Link} to="/Login">Log In</NavLink>
					</NavItem>
			  	  </Nav>
				</Collapse>
			</Container>
		  </Navbar>
		</div>
	  );
	}
  }
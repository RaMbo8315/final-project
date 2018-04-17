import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
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
		
	render(){
	return(
		<div>
			<Navbar color="dark" dark expand="md lg" fixed="top">
				<Container>
					<NavbarBrand className="text-muted" tag={Link} to="/">Full Auto Detail</NavbarBrand>
					<NavbarBrand className="text-info"> Welcome, {this.props.children}</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
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

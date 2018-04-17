import React from 'react';
import "./style.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	Container,
	Form,
	FormGroup,
	Input,
	Button
	} from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class HomeNav extends React.Component {
	constructor(props) {
	  super(props);
		this.state = {
			username: "",
			password: "",
			auth: {
				userId:"",
				username:"",
				isAuthenticated:false
			},
			isOpen: false
		};
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

	componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
	}
	
	handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }
	
	render() {
	  return (
		<div>
		  <Navbar color="dark" dark expand="md lg" fixed="top">
		  	<Container>
					<NavbarBrand tag={Link} to="/">Full Auto Detail</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
								<Form inline>
									<FormGroup className="mb-2 mx-auto mr-sm-1 mb-sm-0">
										<Input type="email" name="username" value = {this.props.username} onChange = {this.props.handleChange} id="exampleEmail" placeholder="example@mail.com" />
									</FormGroup>
									<FormGroup className="mb-2 mr-sm-1 mb-sm-0">
										<Input type="password" name="password" value = {this.props.password} onChange = {this.props.handleChange} id="examplePassword" placeholder="Password" />
									</FormGroup>
									<Button type="submit" name="/auth/signin" onClick={this.props.handleSubmit}><FontAwesome.FaSignIn />Log In</Button>
								</Form>
						</Nav>
					</Collapse>
				</Container>
		  </Navbar>
		</div>
	  );
	}
  }
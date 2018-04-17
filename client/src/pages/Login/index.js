import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./style.css";
import axios from 'axios';
import HomeNav from "../../components/HomeNav";
import { Container, Form, FormGroup, Input, Label, Card, CardBody, CardHeader, Button } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Login extends Component {
	state = {
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

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

    //call a sign In function
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
	return(
	<div>
    <HomeNav/>
		<Container>
      <br/>
      <br/>
		<Card className="card-login mx-auto mt-5">
     			<CardHeader>Login</CardHeader> 
					  <CardBody>
            			<Form>
              				<FormGroup>
                				<Label for="username">Email address</Label>
                				<Input className="form-control" value = {this.props.username} onChange = {this.props.handleChange} name='username' type="email" aria-describedby="emailHelp" placeholder="Enter email"/>
              				</FormGroup>
              				<FormGroup>
                				<Label for="password">Password</Label>
                				<Input className="form-control" value = {this.props.password} onChange = {this.props.handleChange} name='password' type="password" placeholder="Password"/>
              				</FormGroup>
              				<Button className="btn btn-primary btn-block" color="primary" type="submit" name="/auth/signin" onClick = {this.props.handleSubmit}>Sign In</Button>
            			</Form>
            			<div className="text-center">
              				<Link className="d-block small mt-3" to="/Signup">Sign Up</Link>
            			</div>  
          	</CardBody>
        </Card>
		</Container>
		<br/>
    <br/>
	</div>
	);
	}
}

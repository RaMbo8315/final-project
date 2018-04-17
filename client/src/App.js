import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import SignUp from "./pages/Signup";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Services from "./pages/Services";

class App extends Component {
  state = {
    client:{
      firstName:"",
      lastName:"",
      phoneNumber: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      username: "",
      password: ""
    },
		auth: {
		  userId:"",
		  username:"",
		  isAuthenticated:false
		}
	  };
	
	  componentDidMount(){
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
		  username: this.state.username,
		  password: this.state.password
		};
		this.setState({
      client:{
        firstName:"",
        lastName:"",
        phoneNumber: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        username: "",
        password: "",
      }
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

    handleLogout = (event) => {
		event.preventDefault();
		axios.get("/auth/logout").then((result)=>{
			this.setState({
				auth:{
					userId: "",
					username: "",
					isAuthenticated: false
				}
      });
			console.log(result)
		})
	};

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    console.log(loggedIn)
    // debugger;
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" render = {()=> {
            if(loggedIn){
              return <Redirect to="/Profile"/>
            }else{
              return <Home
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                      />
            }
          }} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Testimonials" component={Testimonials} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Profile" render = {()=> {
            if(loggedIn){
              return <Profile auth={this.state.auth} handleLogout={this.handleLogout}/>
            }else{
              return <Redirect to = "/" />
            }
          }} />
           <Route exact path="/SetAppointment" render = {()=> {
            if(loggedIn){
              return <Appointment auth={this.state.auth} handleLogout={this.handleLogout}/>
            }else{
              return <Redirect to = "/" />
            }
          }}/>
          <Route exact path="/Signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/Profile" />
          } else{
            return <SignUp 
            handleChange= {this.handleChange} 
            handleSubmit = {this.handleSubmit}
            firstname = {this.state.firstName}
            lastname = {this.state.lastName}
            phonenumber = {this.state.phoneNumber}
            address = {this.state.address}
            address2 = {this.state.address2}
            city = {this.state.city}
            state = {this.state.state}
            zip = {this.state.zip}
            username = {this.state.username}
            password = {this.state.password}/>
          }  
        }}/>
        </Switch>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
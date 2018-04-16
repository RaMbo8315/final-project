import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import ClientNav from "./components/ClientNav";
import HomeNav from "./components/HomeNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Client from "./pages/Client";
import Contact from "./pages/Contact"


class App extends Component {
  state = {
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
      fullName: this.state.firstName+" "+this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      fullAddress: this.state.address+" "+this.state.address2+" "+this.state.city+" "+this.state.state+" "+this.state.zip,
		  username: this.state.username,
		  password: this.state.password
		};
		this.setState({
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
    return (
      <Router>
        <div>
        {loggedIn ? <ClientNav handleLogout={this.handleLogout}/> : <HomeNav/>}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Testimonials" component={Testimonials} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Client" render = {()=> {
            if(loggedIn){
              return <Client auth={this.state.auth}/>
            }else{
              return <Home/>
            }
          }} />
          <Route exact path="/Login" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/Client" />
          } else{
            return <Login
            handleChange={this.handleChange}
            handleSubmit = {this.handleSubmit}
            username={this.state.username}
            password={this.state.password}
            />
          } 
        }}/>
          <Route exact path="/Signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/Client" />
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
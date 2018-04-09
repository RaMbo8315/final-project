import React from 'react';
import "./style.css";
import Footer from "../../components/Footer";
import 'react-datepicker/dist/react-datepicker.css';
// import { Container } from 'reactstrap';
import BootNav from '../../components/Nav';

// gather other componets
//import otherComponent from "../otherComponent";

export default class Testimonials extends React.Component {
	
	render() {
	return(
	<div>
		<BootNav/>

		<Footer/>
		</div>
	);
}
}

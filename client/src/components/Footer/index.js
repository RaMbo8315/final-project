import React from 'react';
import "./style.css";
import { Container } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

const Footer = (props) => {
	return(
		<div>
			<footer className="py-5 bg-dark">
      			<Container>
        			<p className="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      			</Container>
    		</footer>
		</div>
	);
}

export default Footer;
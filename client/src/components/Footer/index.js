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
				  <p className="text-white m-0 text-center"> (407) 446 - 3684   &#8226; HUrena1583@gmail.com  &#8226;  Github.com/RaMbo8315</p>
      			</Container>
    		</footer>
		</div>
	);
}

export default Footer;
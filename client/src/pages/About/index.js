import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import HomeNav from "../../components/HomeNav";
import { Container, Row, Col } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class About extends React.Component {
	render() {
	return(
	<div>
		<HomeNav/>
		<br/>
		<Container>
			<ol className="breadcrumb">
				<li className="breadcrumb-item">
					<Link to="/">Home</Link>
				</li>
				<li className="breadcrumb-item active">About</li>
				<li className="breadcrumb-item">
					<Link to="/Services">Services</Link>
				</li>
				<li className="breadcrumb-item">
					<Link to="/Portfolio">Portfolio</Link>
				</li>
				<li className="breadcrumb-item">
					<Link to="/Testimonials">Testimonials</Link>
				</li>
				<li className="breadcrumb-item">
					<Link to="/Contact">Contact</Link>
				</li>
			</ol>
      		<Row>
        		<Col lg="6">
          			<img className="img-fluid rounded mb-4" src="http://placehold.it/750x450" alt=""/>
        		</Col>
        		<Col lg="6">
         			 <h2>About Modern Business</h2>
        	         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
 			         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
   			         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
        		</Col>
      		</Row>
			<br/>
      			<h2>Our Customers</h2>
      		<Row>
        		<Col lg="2" sm="4" mb="4">
          			<img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
        		</Col>
        		<Col lg="2" sm="4" mb="4">
          			<img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
        		</Col>
       		    <Col lg="2" sm="4" mb="4">
          			<img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
        		</Col>
        		<Col lg="2" sm="4" mb="4">
         			 <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
        		</Col>
        		<Col lg="2" sm="4" mb="4">
          			<img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
        		</Col>
        		<Col lg="2" sm="4" mb="4">
          			<img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
       		    </Col>
     		</Row>
    	</Container>
		<br/>
	</div>
	);
  }
}

// export default About;
import React from 'react';
import "./style.css";
import { Container, Row, Col } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

export default class About extends React.Component {
	render() {
	return(
	<div>
		<Container>
      		<h1 className="mt-4 mb-3">About{" "}
        		<small>Subheading</small>
      		</h1>

      		<ol className="breadcrumb">
        		<li className="breadcrumb-item">
          			<a href="index.html">Home</a>
        		</li>
        		<li className="breadcrumb-item active">About</li>
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

      			<h2>Our Team</h2>

      		<Row>
        		<Col lg="4" mb="4">
         			 <div className="card h-100 text-center">
            			<img className="card-img-top" src="http://placehold.it/750x450" alt=""/>
            			<div className="card-body">
              				<h4 className="card-title">Team Member</h4>
              				<h6 className="card-subtitle mb-2 text-muted">Position</h6>
              				<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
            		 	</div>
           			 	<div className="card-footer">
              				<a href="">name@example.com</a>
            			</div>
          			 </div>
        		</Col>
        		<Col lg="4" mb="4">
          			<div className="card h-100 text-center">
            			<img className="card-img-top" src="http://placehold.it/750x450" alt=""/>
            			<div className="card-body">
              				<h4 className="card-title">Team Member</h4>
              				<h6 className="card-subtitle mb-2 text-muted">Position</h6>
             				 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
            			</div>
            			<div className="card-footer">
             				 <a href="">name@example.com</a>
            			</div>
          			</div>
       			</Col>
        		<Col mb="4">
         			 <div className="card h-100 text-center">
            			<img className="card-img-top" src="http://placehold.it/750x450" alt=""/>
            			<div className="card-body">
             				 <h4 className="card-title">Team Member</h4>
           				     <h6 className="card-subtitle mb-2 text-muted">Position</h6>
              				 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
            			</div>
           				 <div className="card-footer">
              				<a href="">name@example.com</a>
            			</div>
          			</div>
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
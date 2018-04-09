import React from 'react';
import "./style.css";
import { Container, Row, Col } from 'reactstrap';

// gather other componets
//import otherComponent from "../otherComponent";

const Header = (props) => {
	return(
	<header className="business-header">
      <Container>
        <Row>
          <Col lg="12">
			<h1 className="display-3 text-center text-white mt-4">Full Auto Detail</h1>
          </Col>
        </Row>
      </Container>
    </header>
	);
}

export default Header;
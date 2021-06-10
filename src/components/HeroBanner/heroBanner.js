import React from 'react';
import ass from "../../Images/BG/Astronaut.svg";
import ship from "../../Images/BG/SpaceStation.svg";
import './heroBanner.css'

import { Jumbotron, Button,Row,Col } from "react-bootstrap";

// import NavBar from "../NavBar/Navbar";

function HeroBanner() {
  return (
    <div className="container mt-5 mb-5">

      <Row>
        <Col xs={12} md={6}>
          <Jumbotron>
            <h1 className="hb_h1">HELLO</h1>
            <h2 className="hb_h2">Welcome to Liberty!</h2>
            <p className="hb_p">
              A Defi stablecoin ecosystem dedicated to safeguarding the liberty
              of our community and society.
            </p>
            <p>
              <Button className="hb-btn-custom" variant="primary">
                CONNECT WALLET
              </Button>
            </p>
          </Jumbotron>
        </Col>
        <Col xs={12} md={6}>
          <div className="hero-image">
            {/* <img src="./Images/Astronaut.svg"></img> */}
            <img
              alt="ship"
              src={ship}
              className="ship slide-top"
              resizeMode="cover"
            />
            <img
              alt="ass"
              src={ass}
              className="ass slide-bottom "
              resizeMode="cover"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HeroBanner;
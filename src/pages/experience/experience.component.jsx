import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap"></Card.Header>
              <Card.Title className="text-center" style={{color: "#"}}><h1><b>COGNIZANT</b></h1></Card.Title>
 
              {/* <Card.Body className="d-flex justify-content-center flex-column"> */}
                <div>
                  <Card.Title className="text-center"><b>PROGRAMMER ANALYST TRAINEE</b></Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Technology:</strong> Mainframe
                    <br />
                    <strong>Duration:</strong> NOV 2019 - May 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Develop </strong> & Code high-performance programs for Clients 
</li>
                      <li><strong>Analyze</strong>  user needs and design software solutions
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                      </li>
                      <li><strong>Perform</strong> Work with other teams for debugging.</li>
                    </ul>
                  </Card.Text>
                </div>
              {/* </Card.Body> */}
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;

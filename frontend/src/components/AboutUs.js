import React from "react";
import "./AboutUs.scss";
import Dhruv from '../assets/img/profile/dhruv.jpeg'
import Sameet from '../assets/img/profile/Sameet.jpeg'
import Saurabh from '../assets/img/profile/Saurabh.jpeg'
import Punith from '../assets/img/profile/puneeth.jpeg'
import Aayush from '../assets/img/profile/Aayush.jpeg'
import {
  Badge, Button, Card, CardBody, Container, Row, Col, CardImg
} from "reactstrap";

const AboutUs = () => {
  return (
    <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-default">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Container className="py-lg-md d-flex">
        <div className="col px-0">
          <Row>
            <Col lg="12">
              <h1 className="display-3 text-white">
                About Us
              </h1>
              <p className="description mt-3 text-white" style={{fontSize:"20px"}}>
              Bring your team or your entire Club and enjoy the best 2 day tournament in the Region. We will have multiple flights (as needed) for the Fall Classic with a 3 game minimum for each team.
              We will have a large number of teams that play Short-Sided games in this tournament.
              <big/>
             <br/><br/>
              WHEN: October 15-18, 2022 Where: Tempe AZ
              <br/><br/>
              FEES: u8-u9-u10 (7v7) $525; u10-u11-u12 (8v8) $575; u12-u13-u14-u15 (11v11) $625
              <br/><br/>
              APPLICATION DEADLINE: September 10, 2021. All applications received by the deadline will be evaluated equally in the selection process. Applications received after the deadline will automatically be placed on a waiting list. Any questions may be directed to carol@Sparky'sclassic.com
              <br/><br/>
              HOTELS: The Sparky's Tournament is a stay to play tournament. A team MUST stay in a listed hotel to be accepted and participate in the tournament. The Sparky's Housing Bureau (SiteSearch) has blocked rooms at the hotels listed at the best possible rates. Please click on the Find A Hotel link in the left hand column to secure your hotel rooms.
              <br/><br/>
              Make Payment to: Sparky's Soccer Club; ATTN: 1275 East University Drive, Unit 409
              <br/><br/>
              The process includes the
              <br/>
              1) Completion of the application form
              <br/>
              2) CLICK APPLY at the top of Front Page!
              <br/>
              3) After you submit the form you will receive an APPLICATION CERTIFICATE with the data that you provided (a duplicate certificate is also sent to the primary email you provided on your application). Payments may be made online via Credit Card.
              <br/>             
              4) Return the APPLICATION CERTIFICATE via a credit card Online during your registration or send a check made out to Sparky's Soccer Classic to the address listed on the Certificate.
              <br/>
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h1 className="display-3 text-white">
                Developer Team
              </h1>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="py-lg-md d-flex">
        <Container>
        <br/>
				<br/>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg className="img-fluid" src={Dhruv} alt="placeholder" width="100%" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Dhruv Patel
                      </h6>
                      <p className="description mt-3">
                      I put funny captions on instagram.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-arrow-right" />
                        </span>
                        <span className="btn-inner--text">
                          Linkedin
                        </span>
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg className="img-fluid" src={Sameet} alt="placeholder" width="100%" height="800vw" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Sameet Krishna
                      </h6>
                      <p className="description mt-3">
                      Software Developer in my spare time. Love to travel and eat food. One thing I say wherever i go: "Hello World!".
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-arrow-right" />
                        </span>
                        <span className="btn-inner--text">
                          Linkedin
                        </span>

                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg className="img-fluid" src={Saurabh} alt="placeholder" width="100%" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Saurabh Rane
                      </h6>
                      <p className="description mt-3">
                       Chicken khaana hai kya tereko?</p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-arrow-right" />
                        </span>
                        <span className="btn-inner--text">
                          Linkedin
                        </span>

                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">

                <Col lg="2" />
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg className="img-fluid" src={Aayush} alt="placeholder" width="100%" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Aayush Rawal
                      </h6>
                      <p className="description mt-3">
                      On a recon mission for MI6. 007 who?</p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>                      
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-arrow-right" />
                        </span>
                        <span className="btn-inner--text">
                          Linkedin
                        </span>

                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg className="img-fluid" src={Punith} alt="placeholder" width="100%" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Punith Vaddi
                      </h6>
                      <p className="description mt-3">
                      Avid runner. This team is me and I am this team.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>                        
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-arrow-right" />
                        </span>
                        <span className="btn-inner--text">
                          Linkedin
                        </span>

                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="2" />
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;

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
              <p className="lead text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id esse delectus illum cupiditate! Iure, eveniet? Fugit accusamus neque harum labore nihil provident rem non deleniti! Alias rerum aut facilis!
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
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
                        Punith Vadi
                      </h6>
                      <p className="description mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laboriosam, eligendi exercitationem vero earum nemo, inventore repellendus necessitatibus maxime sapiente dignissimos nihil veritatis voluptatem ad. Quibusdam non accusamus ipsa.
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Student
                        </Badge>
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

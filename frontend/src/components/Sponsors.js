import React from "react";
import "./Sponsors.scss";

import adidas from "../assets/img/brand/adidas.png";
import kia from "../assets/img/brand/kia.png";
import cola from "../assets/img/brand/cc.png";
import qatar from "../assets/img/brand/qatar.png";
import visa from "../assets/img/brand/visa.png";
import wanda from "../assets/img/brand/wanda.png";

import {
  Badge,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardImg,
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
                Our Sponsors and Partners
              </h1>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="py-lg-md d-flex">
        <Container>
          <br />
          <br />
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      className="img-fluid"
                      src={visa}
                      alt="placeholder"
                      width="100%"
                    />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">Visa</h6>

                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Title Sponsor
                        </Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      className="img-fluid"
                      src={qatar}
                      alt="placeholder"
                      width="100%"
                      height="800vw"
                    />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">Qatar</h6>

                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Hospitality Partner
                        </Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      className="img-fluid"
                      src={wanda}
                      alt="placeholder"
                      width="100%"
                    />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">Wanda</h6>

                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Media Partner
                        </Badge>
                      </div>
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
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      className="img-fluid"
                      src={kia}
                      alt="placeholder"
                      width="100%"
                    />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Hyundai Kia
                      </h6>

                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Travel Partner
                        </Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      className="img-fluid"
                      src={cola}
                      alt="placeholder"
                      width="100%"
                    />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">Coca Cola</h6>

                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Refreshment Sponsor
                        </Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      className="img-fluid"
                      src={adidas}
                      alt="placeholder"
                      width="100%"
                    />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">Adidas</h6>

                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Merchandise Partner
                        </Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
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

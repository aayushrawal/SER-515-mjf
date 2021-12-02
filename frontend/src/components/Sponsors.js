import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sponsors.scss";

import {
  Badge,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardImg,
} from "reactstrap";

const Sponsors = () => {
  const url = "https://sparkys-league-server.herokuapp.com/api/sponsor/sponsor-list";

  const [sponsorList, setSponsorList] = useState([]);

  useEffect(() => {
    getSponsors();
  }, []);

  const getSponsors = () => {
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          let data = response.data;
          setSponsorList(data.sponsors);
        }
      });
  };

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
                {sponsorList.map((sponsor, idx) => (
                  <>
                    <Col lg="4" key={idx}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          className="img-fluid"
                          src={sponsor.sponsorImage}
                          alt={sponsor.sponsorName}
                          width="100%"
                        />
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            {sponsor.sponsorName}
                          </h6>

                          <div>
                            <Badge color="primary" pill className="mr-1">
                              {sponsor.sponsorType}
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                      <br />
                      <br />
                    </Col>
                  </>
                ))}
              </Row>
            </Col>
          </Row>
          <br />
          <br />
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

export default Sponsors;

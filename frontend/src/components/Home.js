import React from "react";
import "./Home.scss";

import { Container, Row, Col, Button } from "reactstrap";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section section-lg section-shaped main-section">
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
      <Container className="py-lg-md main-content">
        <div>
          <Row className="justify-content-md-center">
            <Col lg="6">
              <h1 className="text-white">
                <span>Are you ready to play?</span>
              </h1>
              <p className="lead text-white">
                The annual sparkys soccer tournament is back and is bigger than
                last year! Are you going to be the next champion?
              </p>
              <div className="btn-wrapper btn-content">
                <Button
                  className="btn-icon mb-3 mb-sm-0"
                  color="danger"
                  to="/register"
                  tag={Link}
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-arrow-right" />
                  </span>
                  <span className="btn-inner--text">Get Started</span>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
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

export default Home;

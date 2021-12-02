import React from "react";

import "./Venues.scss";

import { Button, Container, Row, Col, Modal } from "reactstrap";

class Venues extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <>
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
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col md="8">
                <Button
                  block
                  className="mb-3"
                  color="primary"
                  type="button"
                  onClick={() => this.toggleModal("Modal1")}
                >
                  T-Mobile Park
                </Button>
                <Modal
                  className="modal-dialog-centered"
                  isOpen={this.state.Modal1}
                  toggle={() => this.toggleModal("Modal1")}
                >
                  <div className="modal-header">
                    <h6 className="modal-title" id="modal-title-default">
                      T-Mobile Park, Seattle, WA
                    </h6>
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal1")}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <iframe
                        title ="tmobilepark"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.7860915793217!2d-122.33469718410592!3d47.59140257918369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a9f505dc4db%3A0xc6f829b3a6a6fd95!2sT-Mobile%20Park!5e0!3m2!1sen!2sus!4v1635561071284!5m2!1sen!2sus"
                        width="450"
                        height="300"
                        loading="lazy"
                      ></iframe>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      color="primary"
                      type="button"
                      href="https://goo.gl/maps/zMU7m8oA7wvLKmyM8"
                      target="_blank"
                    >
                      View Details on Google Maps
                    </Button>
                    <Button
                      className="ml-auto"
                      color="link"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal1")}
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="8">
                <Button
                  block
                  className="mb-3"
                  color="primary"
                  type="button"
                  onClick={() => this.toggleModal("Modal2")}
                >
                  Michigan Stadium
                </Button>
                <Modal
                  className="modal-dialog-centered"
                  isOpen={this.state.Modal2}
                  toggle={() => this.toggleModal("Modal2")}
                >
                  <div className="modal-header">
                    <h6 className="modal-title" id="modal-title-default">
                      Michigan Stadium, Ann Arbor, MI
                    </h6>
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal2")}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <iframe
                      title ="michiganStadium"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5942602150094!2d-83.75088428425691!3d42.26583647919336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae33aea0df4d%3A0xd70008b6cc50d3ad!2sMichigan%20Stadium!5e0!3m2!1sen!2sus!4v1635563450437!5m2!1sen!2sus"
                        width="450"
                        height="300"
                        loading="lazy"
                      ></iframe>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      color="primary"
                      type="button"
                      href="https://goo.gl/maps/tgvKoHtVJUNKb2qJ8"
                      target="_blank"
                    >
                      View Details on Google Maps
                    </Button>
                    <Button
                      className="ml-auto"
                      color="link"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal2")}
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="8">
                <Button
                  block
                  className="mb-3"
                  color="primary"
                  type="button"
                  onClick={() => this.toggleModal("Modal3")}
                >
                  State Farm Stadium
                </Button>
                <Modal
                  className="modal-dialog-centered"
                  isOpen={this.state.Modal3}
                  toggle={() => this.toggleModal("Modal3")}
                >
                  <div className="modal-header">
                    <h6 className="modal-title" id="modal-title-default">
                      State Farm Stadium, Glendale, AZ
                    </h6>
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal3")}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <iframe
                      title ="StateFarmStadium"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.990805560245!2d-112.26474798447241!3d33.527624680751934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b40484caa40dd%3A0xb9c497aa9569305b!2sState%20Farm%20Stadium!5e0!3m2!1sen!2sus!4v1635563882334!5m2!1sen!2sus"
                        width="450"
                        height="300"
                        loading="lazy"
                      ></iframe>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      color="primary"
                      type="button"
                      href="https://goo.gl/maps/McdSQ1dvyaaPLDjQ9"
                      target="_blank"
                    >
                      View Details on Google Maps
                    </Button>
                    <Button
                      className="ml-auto"
                      color="link"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal3")}
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="8">
                <Button
                  block
                  className="mb-3"
                  color="primary"
                  type="button"
                  onClick={() => this.toggleModal("Modal4")}
                >
                  Chase Field
                </Button>
                <Modal
                  className="modal-dialog-centered"
                  isOpen={this.state.Modal4}
                  toggle={() => this.toggleModal("Modal4")}
                >
                  <div className="modal-header">
                    <h6 className="modal-title" id="modal-title-default">
                      Chase Field, Phoenix, AZ
                    </h6>
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal4")}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <iframe
                      title="ChaseField"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1524550268055!2d-112.06889778447412!3d33.44533438077549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b11f5f3e35ef1%3A0x6638344b3ba1625e!2sChase%20Field!5e0!3m2!1sen!2sus!4v1635563093053!5m2!1sen!2sus"
                        width="450"
                        height="300"
                        loading="lazy"
                      ></iframe>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      color="primary"
                      type="button"
                      href="https://goo.gl/maps/Ca85FvQD5E1BJ2yr9"
                      target="_blank"
                    >
                      View Details on Google Maps
                    </Button>
                    <Button
                      className="ml-auto"
                      color="link"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal4")}
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="8">
                <Button
                  block
                  className="mb-3"
                  color="primary"
                  type="button"
                  onClick={() => this.toggleModal("Modal5")}
                >
                  LA Memorial Coliseum
                </Button>
                <Modal
                  className="modal-dialog-centered"
                  isOpen={this.state.Modal5}
                  toggle={() => this.toggleModal("Modal5")}
                >
                  <div className="modal-header">
                    <h6 className="modal-title" id="modal-title-default">
                      LA Memorial Coliseum, Los Angeles, CA
                    </h6>
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal5")}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <iframe
                      title="LAmemorial"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.1619930608736!2d-118.29006408446135!3d34.01405258061621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c807d74e67fb%3A0x54cf0a70d5943d36!2sLA%20Memorial%20Coliseum!5e0!3m2!1sen!2sus!4v1635563381648!5m2!1sen!2sus"
                        width="450"
                        height="300"
                        loading="lazy"
                      ></iframe>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      color="primary"
                      type="button"
                      href="https://g.page/LAColiseum?share"
                      target="_blank"
                    >
                      View Details on Google Maps
                    </Button>
                    <Button
                      className="ml-auto"
                      color="link"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("Modal5")}
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
              </Col>
            </Row>
          </Container>
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
      </>
    );
  }
}

export default Venues;

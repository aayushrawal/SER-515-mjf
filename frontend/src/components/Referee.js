import React from "react";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";

import "./Referee.scss";

const Referee = () => {
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
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Referee registration</small>
                  </div>
                  <Form role="form">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="ni ni-hat-3" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="ni ni-email-83" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="ni ni-lock-circle-open" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Username"
                          type="text"
                          autoComplete="off"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="ni ni-hat-3" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone Number" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="ni ni-hat-3" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Date of Birth" type="date" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          caret
                          color="secondary"
                          data-placement="right"
                          id="tooltip159654437"
                          size="sm"
                          className="font-weight-700"
                        >
                          Select event
                        </DropdownToggle>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip159654437"
                        >
                          Selecting a category registers you for lower
                          categories automatically
                        </UncontrolledTooltip>
                        <DropdownMenu>
                          <DropdownItem onClick={(e) => e.preventDefault()}>
                            Category 1 - U8
                          </DropdownItem>
                          <DropdownItem onClick={(e) => e.preventDefault()}>
                            Category 2 - U48
                          </DropdownItem>
                          <DropdownItem onClick={(e) => e.preventDefault()}>
                            Category 3 - O48
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </FormGroup>

                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="button">
                        Create account
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
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
};

export default Referee;

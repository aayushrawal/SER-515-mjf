import React, { useState } from "react";
import axios from "axios";
import Alerts from "./Alerts";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./Referee.scss";

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
  UncontrolledTooltip,
} from "reactstrap";

const Referee = () => {
  const url = "https://sparkys-league-server.herokuapp.com/api/referee/registration";
  const [isAlert, setIsAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [data, setData] = useState({
    refereeName: "",
    refereeEmail: "",
    refereeUsername: "",
    refereePhonenumber: "",
    refereeDob: "",
    refereeEventcategory: "",
    refereeStatus: "not accepted",
  });

  const resetForm = () => {
    const obj = {
      ...data,
      refereeName: "",
      refereeEmail: "",
      refereeUsername: "",
      refereePhonenumber: "",
      refereeDob: "",
      refereeEventcategory: "",
    };

    setData(obj);
  };

  const createAlertMessage = ({ alertColor, alertStatus, alertMessage }) => {
    setIsAlert(true);
    setAlertColor(alertColor);
    setAlertStatus(alertStatus);
    setAlertMessage(alertMessage);
  };

  const resetAlertMessage = () => {
    setIsAlert(false);
    setAlertColor("");
    setAlertStatus("");
    setAlertMessage("");
  };
  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const handleSelect = (e) => {
    const newdata = { ...data };
    newdata["refereeEventcategory"] = e;
    setData(newdata);
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post(
        url,
        {
          refereeName: data.refereeName,
          refereeEmail: data.refereeEmail,
          refereeUsername: data.refereeUsername,
          refereePhonenumber: data.refereePhonenumber,
          refereeDob: data.refereeDob,
          refereeEventcategory: data.refereeEventcategory,
          refereeStatus: data.refereeStatus,
          matchAssign: "not assigned",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          const createObj = {
            alertColor: "success",
            alertStatus: "Success!",
            alertMessage: "Referee registration successful!",
          };
          createAlertMessage(createObj);
          resetForm();

          setTimeout(() => {
            resetAlertMessage();
          }, 2500);
        } else {
          const createObj = {
            alertColor: "danger",
            alertStatus: "Failure!",
            alertMessage: "Something went wrong!",
          };
          createAlertMessage(createObj);

          setTimeout(() => {
            resetAlertMessage();
          }, 2500);
        }
      });
  };
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
          {isAlert ? (
            <Alerts
              color={alertColor}
              status={alertStatus}
              message={alertMessage}
            />
          ) : (
            ""
          )}
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Referee registration</small>
                  </div>
                  <Form role="form" onSubmit={signup}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Name"
                          type="text"
                          id="refereeName"
                          onChange={handle}
                          value={data.refereeName}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          id="refereeEmail"
                          onChange={handle}
                          value={data.refereeEmail}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Username"
                          type="text"
                          autoComplete="off"
                          id="refereeUsername"
                          onChange={handle}
                          value={data.refereeUsername}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Phone Number"
                          type="text"
                          id="refereePhonenumber"
                          onChange={handle}
                          value={data.refereePhonenumber}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Date of Birth"
                          type="date"
                          id="refereeDob"
                          onChange={handle}
                          value={data.refereeDob}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip159654437"
                      >
                        Selecting a category registers you for lower categories
                        automatically
                      </UncontrolledTooltip>
                      <DropdownButton
                        data-placement="right"
                        id="tooltip159654437"
                        size="md"
                        className="font-weight-700"
                        title={
                          data.refereeEventcategory === ""
                            ? " Select Event"
                            : data.refereeEventcategory
                        }
                        onSelect={handleSelect}
                      >
                        <Dropdown.Item eventKey="Category 1 - U8">
                          Category 1 - U8
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Category 2 - U48">
                          Category 2 - U48
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Category 3 - O48">
                          Category 3 - O48
                        </Dropdown.Item>
                      </DropdownButton>
                    </FormGroup>
                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
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

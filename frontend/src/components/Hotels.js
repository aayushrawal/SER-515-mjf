import React, { useState } from "react";
import axios from "axios";
import Alerts from "./Alerts";

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
} from "reactstrap";

const SubmitForm = (e) => {
  e.preventDefault();
};

const Hotels = (props) => {

  const url = "/api/hotels/booking";
  const [isAlert, setIsAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [data, setData] = useState({
    coachName: "",
    coachEmail: "",
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const resetForm = () => {
    const obj = {
      coachName: "",
      coachEmail: "",
    };

    const newObj = {
      ...obj,
    };

    setData(newObj);
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

  const signup = (e) => {
    e.preventDefault();

    axios
      .post(
        url,
        {
          coachName: data.coachName,
          coachEmail: data.coachEmail,
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
            alertMessage: "Hotel booking request successful!",
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
    <div useRef="main">
      <div className="section section-shaped section-lg">
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
        <div className="hotel">
          {/* <div className="hotel-Header">
                <div className="hotel-Header-Content">
                    <h1 className="text">Hotels</h1>
                </div>
            </div> */}

          <div className="hotel-Body">
            <div className="col-12">
              <p class="h2" style={{ color: "white" }}>
                Book Hotels For your Team
              </p>
              <p class="h5" style={{ color: "white" }}>
                All the Teams have to book a Hotel from the listed properties
                only, any team booking outside will not be considered for the
                acceptance of the tournament.
              </p>
              <div className="text-center">
                <a target="_blank" href="https://www.hotels.com/">
                  <Button
                    onclick="('window.location.href)"
                    className="mt-4"
                    color="warning"
                    type="submit"
                    class="btn btn-default"
                  >
                    Book Hotel
                  </Button>
                </a>
              </div>
              <br />
              <br />
              <p class="h5" style={{ color: "white" }}>
                Don't have time to book a hotel? No problem we can do that for
                you. Just submit the form and relax and we will book a Hotel for
                You.
              </p>
              <Container className="pt-lg-7">
                <Row className="justify-content-center">
                  <Col lg="5">
                    <Card className="bg-secondary shadow border-0">
                      <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                          <small>Request for Hotel Booking</small>
                        </div>
                        <Form role="form" onSubmit={signup}>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Name" type="text" id="coachName" value={data.coachName} onChange={handle}/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Email" type="email" id="coachEmail" value={data.coachEmail} onChange={handle}/>
                            </InputGroup>
                          </FormGroup>
                          <div className="text-center">
                            <Button
                              className="mt-4"
                              color="warning"
                              type="submit"
                
                            >
                              Submit Form
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                    {isAlert ? (
            <Alerts
              color={alertColor}
              status={alertStatus}
              message={alertMessage}
            />
          ) : (
            ""
          )}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;

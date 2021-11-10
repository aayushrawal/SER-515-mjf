import React , { useState } from 'react';
import './FAQCreation.scss';
import Alerts from './Alerts';
import axios from "axios";

import {
  Button, Card, CardBody, FormGroup, Input, InputGroupAddon, InputGroupText,
  InputGroup, Container, Row, Col
} from "reactstrap";

const FAQCreation = () => {

  const url = "/api/faq/faq-director";
  const [isAlert, setIsAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  
  const [data, setData] = useState({
    que: "",
    ans: "",
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };
  
  const resetForm = () => {
    const obj = {
      que: "",
      ans: "",
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

  const submit = (e) => {
    e.preventDefault();

    axios
      .post(
        url,
        {
          que: data.que,
          ans: data.ans,
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
            alertMessage: "FAQ entered successful!",
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
        </div>
        <section className=" bg-gradient-default">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">Enter FAQ</h2>
                <br />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt--300">
            {isAlert ? (
            <Alerts
              color={alertColor}
              status={alertStatus}
              message={alertMessage}
            />
          ) : (
            ""
          )}
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Please enter the frequently asked question and its answer.</h4>
                    <br />
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Enter the question over here"
                          rows="2"
                          type="textarea"
                          id="que"
                          onChange={handle}
                          value={data.que}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="name"
                        placeholder="Type your Answer..."
                        rows="4"
                        type="textarea"
                        id="ans"
                        onChange={handle}
                        value={data.ans}
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                        onClick = {submit}
                      >
                        Add FAQ
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FAQCreation;
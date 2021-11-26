import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./RefereeDirectorLogin.scss";
import Alerts from "../Alerts";

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

const RefereeDirectorLogin = (props) => {
  const history = useHistory();
  const url = "/api/users/login";
  const [isAlert, setIsAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
    directorNumber: 1,
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
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

  const resetForm = () => {
    const obj = {
      ...data,
      username: "",
      password: "",
    };

    setData(obj);
  };

  const login = (e) => {
    e.preventDefault();

    axios
      .post(
        url,
        {
          username: data.username,
          password: data.password,
          directorNumber: data.directorNumber,
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
          resetForm();
          let response = res.data;
          if (response.status === "ok") {
            history.push("/referee-director/home");
          } else {
            resetForm();
            const createObj = {
              alertColor: "danger",
              alertStatus: "Failure!",
              alertMessage: "Unable to login!",
            };
            createAlertMessage(createObj);

            setTimeout(() => {
              resetAlertMessage();
            }, 2500);
          }
        }
      });
  };

  return (
    <div>
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
                    <div className="text-center mb-4">
                      <small>Referee Director Login</small>
                    </div>
                    <Form role="form" onSubmit={login}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-users_single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Enter username"
                            type="text"
                            id="username"
                            onChange={handle}
                            value={data.username}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-ui-1_lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Enter password"
                            type="password"
                            id="password"
                            onChange={handle}
                            value={data.password}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button className="mt-4" color="warning" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default RefereeDirectorLogin;

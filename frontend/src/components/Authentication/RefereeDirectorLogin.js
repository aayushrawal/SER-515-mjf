import React, { useState } from "react";
import axios from "axios";
import "./RefereeDirectorLogin.scss";

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
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const login = (e) => {
    e.preventDefault();

    console.log("Testing login object");
    console.log(data);
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
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
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

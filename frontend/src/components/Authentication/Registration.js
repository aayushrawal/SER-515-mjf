import React, { useState } from "react";
import axios from 'axios'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import { Link } from "react-router-dom";

const Registration = (props) => {
  const url = "/api/auth/signup"
  const [data, setData] = useState({
    firstName: "",
    lastName: '',
    roles: "",
    username: "",
    email: "",
    password: ""
  })

  const handle = (e) => {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


  const Signup = (e) => {
    e.preventDefault();

    axios.post(url, {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      roles: [data.roles],
      email: data.email,
      password: data.password,
    },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log(res.data)
      })
  }

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
        <Container className="pt-lg-7">
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                  <div className="text-muted text-center mb-3">
                    <small>Already have an account?</small>
                  </div>
                  <div className="text-center">
                    <Link to="/login">
                      <Button
                        className="mt-4 btn btn-primary"
                        color="default"
                        href="#pablo"
                      >
                        <span className="btn-inner--text">Login</span>
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign up with credentials</small>
                  </div>
                  <Form role="form" onSubmit={Signup}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="FirstName" type="text" id="firstName"
                          input onChange={handle}
                          value={data.firstName} />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="LasttName" type="text" id="lastName"
                          value={data.lastName}
                          input onChange={handle} />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Enter User ID" type="text" id="username"
                          value={data.username}
                          input onChange={handle} />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup >
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="roles"
                          value={data.roles} onChange={handle} >
                          <option value="" disabled selected>Register As</option>
                          <option value="coach">Coach</option>
                          <option value="player">Player</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email"
                          value={data.email}
                          input onChange={handle} />
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
                          id="password"
                          value={data.password}
                          input onChange={handle}
                          placeholder="Password"
                          type="password"
                          autoComplete="off"
                        />
                      </InputGroup>
                    </FormGroup>

                    <div className="text-center">
                      <Button
                        className="mt-4"
                        color="primary"
                        type="submit"
                      >
                        Create account
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        );
      </div>
    </div>
  )
};

export default Registration;

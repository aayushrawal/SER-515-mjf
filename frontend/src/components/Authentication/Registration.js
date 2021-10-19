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
    // (async () => {
    //   const rawResponse = await fetch("/api/auth/signup", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const content = await rawResponse.json();
    //   setData({
    //     reset: true,
    //   });
    //   console.log(content);
    // })();
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
                    <Button
                      className="mt-4 btn btn-primary"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <span className="btn-inner--text">Login</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign up with credentials</small>
                  </div>
                  <Form role="form">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="FirstName" type="text" id="firstName" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="LasttName" type="text" id="lastName" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Enter User ID" type="text" id="username" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup >
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="roles" >
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
                        <Input placeholder="Email" type="email" />
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
                          placeholder="Password"
                          type="password"
                          autoComplete="off"
                        />
                      </InputGroup>
                    </FormGroup>
                    {/* <div className="text-muted font-italic">
                      <small>
                        password strength:{" "}
                        <span className="text-success font-weight-700">
                          strong
                        </span>
                      </small>
                    </div> */}
                    <div className="text-center">
                      <Button
                        className="mt-4"
                        color="primary"
                        type="button"
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
        {/* <div className="container">
          <form onSubmit={Signup}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={handle}
                type="text"
                className="form-control"
                id="firstName"
                value={data.firstName}
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input onChange={handle}
                type="text"
                className="form-control"
                id="lastName"
                value={data.lastName}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input onChange={handle}
                type="text"
                className="form-control"
                id="username"
                value={data.username}
                placeholder="Enter User ID"
              />
            </div>
            <div className="form-group">
              <label htmlFor="roles">Register As</label>
              <select className="form-control" id="roles" value={data.roles} onChange={handle}>
                <option>Select One</option>
                <option>coach</option>
                <option>player</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input onChange={handle}
                type="email"
                className="form-control"
                id="email"
                value={data.email}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={handle}
                type="password"
                className="form-control"
                id="password"
                value={data.password}
                placeholder="Enter Password"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
            <div>
              <Link to="/login">Back to login</Link>
            </div>
          </form>
        </div> */}
        );
      </div>
    </div>
  )
};

export default Registration;

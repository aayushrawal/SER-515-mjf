import React, { useState } from "react";
import axios from 'axios'
import "./Registration.scss";
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
  const [playerFields, setPlayerFields] = useState([{
    playerName: null
  }]);

  const [data, setData] = useState({
    firstName: "",
    lastName: '',
    roles: "",
    phoneNumber: "",
    email: "",
    teamName: "",
    cptName: "",
    playerName:"",
    players: []
  });


  const playerAdd = () => {
    const players = [...playerFields];
    players.push({ playerName: null });
    setPlayerFields(players);
  }

  const playerRemove = (i) => {
    const players = [...playerFields];
    players.splice(i, 1);
    setPlayerFields(players);
  }

  const handle = (e) => {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }

  function handlePlayerData(i, event) {
    const players = [...playerFields];
    players[i].playerName = event.target.value;
    setPlayerFields(players);
  }

  const Signup = (e) => {
    e.preventDefault();
    let newData = { ...data, players: [...playerFields] };
    setData(newData);
    console.log(newData);

    // axios.post(url, {
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   phoneNumber: data.phoneNumber,
    //   roles: [data.roles],
    //   email: data.email,
    //   password: data.password,
    // },
    //   {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then(res => {
    //     console.log(res.data)
    //   })
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
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Register Team</small>
                  </div>
                  <Form role="form" onSubmit={Signup}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i class="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Coach FirstName" type="text" id="firstName"
                          input onChange={handle}
                          value={data.firstName} />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i class="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Coach LastName" type="text" id="lastName"
                          value={data.lastName}
                          input onChange={handle} />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i class="fa fa-phone"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone number" type="text" id="phoneNumber"
                          value={data.phoneNumber}
                          input onChange={handle} />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" id="email"
                          value={data.email}
                          input onChange={handle}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i class="fa fa-users"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Team Name" type="text" id="teamName"
                          value={data.teamName}
                          input onChange={handle} />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Captain Name" type="text" id="cptName"
                          value={data.cptName}
                          input onChange={handle} />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Player Name" type="text" id="playerName"
                          value={data.playerName}
                          input onChange={handle} />
                      </InputGroup>
                    </FormGroup>
                    
                    {playerFields.map((player, idx) => (
                      <div key={idx}>
                        <FormGroup>
                          <Row>
                            <Col md="10">
                              <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-user" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Add Players" type="text" id="playerName"
                                  value={player.playerName || ""}
                                  input onChange={e => handlePlayerData(idx, e)} />
                              </InputGroup>
                            </Col>
                            <Col md="2" className="d-flex">
                              <span className="btn-icon">
                                <i class="fa fa-minus-circle fa-lg" onClick={playerRemove}></i>
                              </span>
                              <span className="btn-icon">
                                <i class="fa fa-plus fa-lg" onClick={playerAdd}></i>
                              </span>
                            </Col>
                          </Row>
                        </FormGroup>
                      </div>
                    ))}
                    <div className="text-center">
                      <Button
                        className="mt-4"
                        color="primary"
                        type="submit"
                      >
                        Create Team
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

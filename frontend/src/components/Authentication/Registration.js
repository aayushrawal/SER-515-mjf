import React, { useState } from "react";
import axios from "axios";
import "./Registration.scss";
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

const Registration = () => {
  const url = "/api/users/registration";
  const [isAlert, setIsAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [playerFields, setPlayerFields] = useState([
    {
      playerFullName: null,
    },
  ]);

  const [data, setData] = useState({
    coachFirstName: "",
    coachLastName: "",
    coachPhoneNumber: "",
    coachEmail: "",
    teamName: "",
    teamCaptainName: "",
    teamPlayers: playerFields,
  });

  const playerAdd = () => {
    const players = [...playerFields];
    players.push({ playerFullName: null });
    setPlayerFields(players);
    let newData = { ...data, teamPlayers: [...players] };
    setData(newData);
  };

  const playerRemove = (i, e) => {
    const players = [...playerFields];
    players.splice(i, 1);
    setPlayerFields(players);
    let newData = { ...data, teamPlayers: [...players] };
    setData(newData);
  };

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const resetForm = () => {
    const obj = {
      coachFirstName: "",
      coachLastName: "",
      coachPhoneNumber: "",
      coachEmail: "",
      teamName: "",
      teamCaptainName: "",
    };

    const players = [
      {
        playerFullName: null,
      },
    ];

    setPlayerFields(players);

    const newObj = {
      ...obj,
      teamPlayers: players,
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

  function handlePlayerData(i, e) {
    const players = [...playerFields];
    players[i].playerFullName = e.target.value;
    setPlayerFields(players);
    let newData = { ...data, teamPlayers: [...players] };
    setData(newData);
  }

  const signup = (e) => {
    e.preventDefault();

    axios
      .post(
        url,
        {
          coachFirstName: data.coachFirstName,
          coachLastName: data.coachLastName,
          coachPhoneNumber: data.coachPhoneNumber,
          coachEmail: data.coachEmail,
          teamName: data.teamName,
          teamCaptainName: data.teamCaptainName,
          teamPlayers: data.teamPlayers,
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
            alertMessage: "Team registration successful!",
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
    <div useref="main">
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
                    <small>Register Team</small>
                  </div>
                  <Form role="form" onSubmit={signup}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Coach FirstName"
                          type="text"
                          id="coachFirstName"
                          onChange={handle}
                          value={data.coachFirstName}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Coach LastName"
                          type="text"
                          id="coachLastName"
                          value={data.coachLastName}
                          onChange={handle}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-phone"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Phone number"
                          type="text"
                          id="coachPhoneNumber"
                          value={data.coachPhoneNumber}
                          onChange={handle}
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
                          placeholder="Coach Email"
                          type="email"
                          id="coachEmail"
                          value={data.coachEmail}
                          onChange={handle}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-users"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Team Name"
                          type="text"
                          id="teamName"
                          value={data.teamName}
                          onChange={handle}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Team Captain Name"
                          type="text"
                          id="teamCaptainName"
                          value={data.teamCaptainName}
                          onChange={handle}
                        />
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
                                <Input
                                  placeholder="Enter player fullname"
                                  type="text"
                                  id="playerFullName"
                                  value={player.playerFullName || ""}
                                  onChange={(e) => {
                                    handlePlayerData(idx, e);
                                  }}
                                />
                              </InputGroup>
                            </Col>
                            <Col md="2" className="d-flex">
                              <span className="btn-icon">
                                <i
                                  className="fa fa-minus-circle fa-lg"
                                  onClick={(e) => {
                                    playerRemove(idx, e);
                                  }}
                                ></i>
                              </span>
                              <span className="btn-icon">
                                <i
                                  className="fa fa-plus fa-lg"
                                  onClick={playerAdd}
                                ></i>
                              </span>
                            </Col>
                          </Row>
                        </FormGroup>
                      </div>
                    ))}
                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
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
  );
};

export default Registration;

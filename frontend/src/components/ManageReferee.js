import "./ManageReferee.scss";
import React, { useEffect, useState } from "react";
import RefereeItem from "./RefereeItem";
import axios from "axios";

import Table from "react-bootstrap/Table";
import { Container, Col } from "reactstrap";

const TableHeader = () => (
  <thead>
    <th>#</th>
    <th>Name</th>
    <th>Email</th>
    <th>Username</th>
    <th>Contact Number </th>
    <th>DOB</th>
    <th>Event Category</th>
    <th>Match Assign</th>
    <th>Re-Assign Match</th>
    <th></th>
  </thead>
);

const ManageReferee = () => {
  const url = "https://sparkys-league-server.herokuapp.com/api/referee/referee-list";
  var newData = [];
  const [refereeData, setData] = useState(newData);
  useEffect(() => {
    getAllReferee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllReferee = () => {
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        newData = response.data.referees;
        setData(newData);
      });
  };
  let counter = 0;
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
        <Container className="py-lg-md d-flex">
          <div className="col px-0">
            <Col lg="12">
              <h1 className="display-3 text-white">Referee Management</h1>
            </Col>

            <Table striped bordered hover>
              <TableHeader></TableHeader>
              <tbody>
                {refereeData.map((item, index) => {
                  counter = counter + 1;
                  return (
                    <tr>
                      <td>{counter}</td>
                      <RefereeItem index={index} item={item} key={index} />
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
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
      </div>
    </div>
  );
};

export default ManageReferee;

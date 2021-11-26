import React, { useState, useEffect } from "react";
import "./RefereeApplications.scss";
import axios from "axios";
import { Container } from "reactstrap";
import AcceptReferee from "./AcceptReferee";

const RefereeApplications = () => {
  const url = "/api/referee/referee-list";

  const [refereeList, setRefereeList] = useState([]);

  useEffect(() => {
    getReferees();
  }, []);

  const getReferees = () => {
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          let data = response.data;
          setRefereeList(data.referees);
        }
      });
  };

  return (
    <section className="section section-lg section-shaped main-section">
      <div className="shape shape-style-1 bg-gradient-default">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Container className="justify-content-md-center">
        <AcceptReferee refereeList={refereeList} />
      </Container>
    </section>
  );
};

export default RefereeApplications;

import React, { useState, useEffect } from "react";
import "./RefereeApplications.scss";
import axios from "axios";
import { Container, Button, Table } from "reactstrap";
import Alerts from "./Alerts";

const RefereeApplications = () => {
  const url = "/api/referee/referee-list";
  const url1 = "/api/referee/update-status";
  const [isAlert, setIsAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [refList, setRefList] = useState([]);

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
          let refereeList = data.referees;

          refereeList.map((referee) => {
            return { ...referee, isUpdated: false };
          });

          setRefList(refereeList);
        }
      });
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

  const handleClick = (idx, e, val) => {
    e.preventDefault();
    let referee = refList[idx];
    let refereeList = [...refList];
    refereeList.map((ref) => {
      if (ref._id === referee._id) {
        ref.refereeStatus = val;
      }
      return ref;
    });
    setRefList(refereeList);
    axios
      .put(
        url1,
        {
          ...referee,
          refereeStatus: val,
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
            alertMessage: "Referee status updated!",
          };
          createAlertMessage(createObj);

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
        {isAlert ? (
          <Alerts
            color={alertColor}
            status={alertStatus}
            message={alertMessage}
          />
        ) : (
          ""
        )}
        <Table responsive striped bordered size="sm" dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Current Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {refList.map((referee, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{referee.refereeName}</td>
                <td>{referee.refereeEmail}</td>
                <td>{referee.refereeEventcategory.split(" - ")[1]}</td>
                <td>{referee.refereeStatus}</td>
                <td>
                  <Button
                    size="sm"
                    color="success"
                    type="submit"
                    onClick={(e) => {
                      handleClick(idx, e, "accepted");
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    size="sm"
                    color="warning"
                    type="submit"
                    onClick={(e) => {
                      handleClick(idx, e, "not accepted");
                    }}
                  >
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default RefereeApplications;

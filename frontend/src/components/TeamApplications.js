import React, { useState, useEffect } from 'react'
import "./TeamApplications.scss";
import { Button } from 'reactstrap';
import axios from 'axios';
import Alerts from "../components/Alerts";

const TeamApplications = () => {
    const geturl = "/api/users/team-list"
    const postacceptrejecturl = "/api/team-applications/accept-reject"
    const emailurl = "/sendemail/"

    const [isAlert, setIsAlert] = useState(false);
    const [alertColor, setAlertColor] = useState("");
    const [alertStatus, setAlertStatus] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    

    const [teamdata, setteamdata] = useState({
        users: []
    });

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

    const getuserdata = () => {
        axios.get(geturl).then((res) => {
            const teamdata = res.data;
            setteamdata(teamdata)
        })
    }
    useEffect(() => getuserdata(), [])

    const Accept = (item) => {
        axios.post(postacceptrejecturl,
            {
                teamName: item.teamName,
                coachName: item.coachFirstName + " " + item.coachLastName,
                teamStatus: "accepted",
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
                    item.teamStatus="accepted";
                    // item.acceptStatus = true
                    // item.rejectStatus = true
                    const createObj = {
                        alertColor: "success",
                        alertStatus: "Success!",
                        alertMessage: "Team Accepted for Tournament",
                    }
                    createAlertMessage(createObj);
                    setTimeout(() => {
                        resetAlertMessage();
                    }, 2500);
                }
                else {
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
            })
            axios
            .post(
              emailurl+item.coachEmail,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            )
    }
    

    const Reject = (item) => {
        axios.post(postacceptrejecturl,
            {
                teamName: item.teamName,
                coachName: item.coachFirstName + " " + item.coachLastName,
                teamStatus: item.teamStatus,
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
                    item.teamStatus="not accepted";
                    // item.rejectStatus = true
                    const createObj = {
                        alertColor: "danger",
                        alertStatus: "Rejected!",
                        alertMessage: "Team has been Rejected for the Tournament",
                    }
                    createAlertMessage(createObj);
                    setTimeout(() => {
                        resetAlertMessage();
                    }, 2500);
                }
                else {
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
            })
            axios
            .post(
              emailurl+item.coachEmail,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            )
            
    }

    return (
        <section className="section section-lg section-shaped ">
            <div>
                {isAlert ? (
                    <Alerts
                        color={alertColor}
                        status={alertStatus}
                        message={alertMessage}
                    />
                ) : (
                    ""
                )}
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
                <div>
                    <table className="table" >
                        <thead className="TeamApplication">
                            <tr>
                                <th scope="col"> Team Name</th>
                                <th scope="col">Coach Name</th>
                                <th scope="col">Team Status</th>
                                <th scope="col">Accept/Reject</th>
                            </tr>
                        </thead>
                        <tbody className="TeamApplication">
                            {teamdata.users.map(item => {
                                return (
                                    <tr>
                                        <td>{item.teamName}</td>
                                        <td>{item.coachFirstName + " " + item.coachLastName}</td>
                                        <td>{item.teamStatus}</td>
                                        <td>
                                            <Button  className="mt-0"
                                                color="success"
                                                type="submit"
                                                onClick={() => Accept(item)}>
                                                Accept
                                            </Button>
                                            <Button className="mt-0" 
                                                color="danger"
                                                type="submit"
                                                onClick={() => Reject(item)}>
                                                Reject
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    )
                </div>
            </div>
        </section>
    )

}

export default TeamApplications
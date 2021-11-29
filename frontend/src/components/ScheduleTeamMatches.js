import React, { useState, useEffect } from 'react'
import "./ScheduleTeamMatches.scss";
import { Input, Button } from 'reactstrap';
import axios from 'axios';
import Alerts from "../components/Alerts";

const ScheduleTeamMatches = () => {

    const geturl = "/api/team-applications/accepted-applications"
    const posturl = "/api/team-applications/assign-matches"
    const emailurl = "/sendemail2/"

    const [acceptteams, setacceptteams] = useState([])

    const [isAlert, setIsAlert] = useState(false);
    const [alertColor, setAlertColor] = useState("");
    const [alertStatus, setAlertStatus] = useState("");
    const [alertMessage, setAlertMessage] = useState("");


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

    const getaccepteddata = () => {
        axios.get(geturl).then((res) => {
            const acceptedteams = res.data.acceptedTeams;
            setacceptteams(acceptedteams)
        })
    }
    useEffect(() => getaccepteddata(), [])

    const handle = (e, item, field) => {
        item[field] = e.target.value;
    };

    const Submit = (item) => {
        axios.post(posturl,
            {
                teamName: item.teamName,
                coachEmail: item.coachEmail,
                opponentTeam: item.opponentTeam,
                matchVenue: item.matchVenue,
                teamCategory: item.teamCategory,
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

                    if (res.status === 200) {

                        const createObj = {
                            alertColor: "success",
                            alertStatus: "Success!",
                            alertMessage: "Assigned Match to the Team",
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
                                <th scope="col"> Home Team Name</th>
                                <th scope="col">Opponent Team Name</th>
                                <th scope="col">Match Venue</th>
                                <th scope="col">Category </th>
                                <th scope="col">Assign Match</th>
                            </tr>
                        </thead>
                        <tbody className="schedulematch">
                            {acceptteams.map(item => {
                                return (
                                    <tr>
                                        <td>{item.teamName}</td>
                                        <td>
                                            <Input
                                                placeholder="Opponent Team Name"
                                                type="text"
                                                id="OpponentTeam"
                                                value={item.opponentTeam}
                                                onChange={(e) => handle(e, item, 'opponentTeam')}
                                            />
                                        </td>
                                        <td>
                                            <Input
                                                placeholder="Match Venue"
                                                type="text"
                                                id="MatchVenue"
                                                value={item.matchVenue}
                                                onChange={(e) => handle(e, item, "matchVenue")}
                                            />
                                        </td>
                                        <td>
                                            <select id="teamCategory" value={item.teamCategory}
                                                onChange={(e) => handle(e, item, "teamCategory")}>
                                                <option>Select Category</option>
                                                <option value="Category 1 - U8">Category 1 - U8</option>
                                                <option value="Category 2 - U48">Category 2 - U48</option>
                                                <option value="Category 3 - O48">Category 3 - O48</option>
                                            </select>
                                        </td>
                                        <td>
                                            <Button className="mt-0"
                                                color="warning"
                                                type="submit"
                                                onClick={() => Submit(item)}>
                                                Assign
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

export default ScheduleTeamMatches
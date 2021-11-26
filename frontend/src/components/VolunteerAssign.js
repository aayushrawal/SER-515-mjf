import React, { useState, useEffect } from 'react'
import { Input, Button } from 'reactstrap';
import "./VolunteerAssign.scss";
import axios from 'axios';
import Alerts from "../components/Alerts";


const VolunteerAssign = () => {
    const geturl = "/api/volunteer/volunteer-list"
    const posturl = "/api/volunteer/assign-volunteer"

    const [vdata, setVdata] = useState([])
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



    const handle = (e, item) => {
        // const newdata = { ...VAdata };
        item.VolunteerVenue = e.target.value;
        // setVAdata(newdata)
    }


    const getVdata = () => {
        axios.get(geturl).then((res) => {
            const volunteerdata = res.data;
            setVdata(volunteerdata)
        })
    }
    useEffect(() => getVdata(), [])

    const Submit = (item) => {

        axios.post(posturl,
            {
                VolunteerId: item.VolunteerId,
                VolunteerName: item.VolunteerName,
                VolunteerEmail: item.VolunteerEmail,
                VolunteerVenue: item.VolunteerVenue

            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => {
                if (res.status == 200) {
                    const createObj = {
                        alertColor: "success",
                        alertStatus: "Success!",
                        alertMessage: "Volunteer Assigned to Match",
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
    }

    return (
        <section className="section section-lg section-shaped main-section">
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
                        <thead className="VolunteerItem">
                            <tr>
                                <th scope="col"> Volunteer ID</th>
                                <th scope="col">Volunteer Name</th>
                                <th scope="col">Volunteer Email</th>
                                <th scope="col">Venue</th>
                                <th scope="col">Assign Venue</th>
                            </tr>
                        </thead>
                        <tbody className="VolunteerItem">
                            {vdata.map(item => {
                                return (
                                    <tr key={item.VolunteerId}>
                                        <td>{item.VolunteerId}</td>
                                        <td>{item.VolunteerName}</td>
                                        <td>{item.VolunteerEmail}</td>
                                        <td>
                                            <Input
                                                placeholder="Venue Name"
                                                type="text"
                                                id="VolunteerVenue"
                                                value={item.VolunteerVenue}
                                                onChange={(e) => handle(e, item)}
                                            />
                                        </td>
                                        <td>
                                            <Button className="mt-4"
                                                color="warning"
                                                type="submit"
                                                onClick={() => Submit(item)}>
                                                Submit
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

export default VolunteerAssign;
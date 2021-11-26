import React, { useState, useEffect } from 'react'
import "./TeamApplications.scss";
import { Input, Button } from 'reactstrap';
import axios from 'axios';

const TeamApplications = () => {
    const geturl = "/api/users/team-list"
    const postacceptrejecturl = "/api/team-applications/accept-reject"

    const [teamdata, setteamdata] = useState({
        users: []
    });

    const getuserdata = () => {
        axios.get(geturl).then((res) => {
            const teamdata = res.data;
            setteamdata(teamdata)
        })
    }
    useEffect(() => getuserdata(), [])

    const handle = (e, item) => {
        item.teamCategory = e.target.value;
        // item.Match = e.target.value;
        // item.MatchVenue = e.target.value;

    }

    const Accept = (item) => {
        axios.post(postacceptrejecturl,
            {
                teamName: item.teamName,
                coachName: item.coachFirstName + " " + item.coachLastName,
                teamStatus: "Team Accepted",
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
                
               alert("done")
            }
            else {
                alert("unsuccessful")
            }
        })
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
            if (res.status == 200) {
                
               alert("done")
            }
            else {
                alert("unsuccessful")
            }
        })
    }

    return (
        <section className="section section-lg section-shaped ">
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
                            {/* <th scope="col">Match</th>
                        <th scope="col">Match venue</th> */}
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
                                    {/* <td>
                                        <Input
                                            placeholder="Team category"
                                            type="text"
                                            id="TeamCategory"
                                            value={item.TeamCategory}
                                            onChange={(e) => handle(e, item)}
                                        />
                                    </td> */}
                                    {/* <td>
                                        <select name="Category" id="teamCategory" value={item.teamCategory}
                                            onChange={(e) => handle(e, item)}>
                                            <option value="Category 1 - U8">Category 1 - U8</option>
                                            <option value="Category 2 - U48">Category 2 - U48</option>
                                            <option value="Category 3 - O48">Category 3 - O48</option>
                                        </select>
                                    </td> */}
                                    {/* <td>
                                            <Input
                                                placeholder="Match"
                                                type="text"
                                                id="Match"
                                                value={item.Match}
                                                onChange={(e) => handle(e, item)}
                                            />
                                        </td>
                                        <td>
                                            <Input
                                                placeholder="Venue Name"
                                                type="text"
                                                id="MatchVenue"
                                                value={item.MatchVenue}
                                                onChange={(e) => handle(e, item)}
                                            />
                                        </td> */}
                                    <td>
                                        <Button className="mt-4"
                                            color="warning"
                                            type="submit"
                                            onClick={() => Accept(item) }>
                                            Accept
                                        </Button>
                                        <Button className="mt-4"
                                            color="warning"
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
        </section>
    )

}

export default TeamApplications
import React, { useState, useEffect } from 'react'
import "./VolunteerList.scss";
import axios from 'axios';


const VolunteerList = () => {
    const url = "https://sparkys-league-server.herokuapp.com/api/volunteer/volunteer-list"
    const [vdata, setVdata] = useState([])

    const getVdata = () =>{
        axios.get(url).then((res)=>{
            const volunteerdata = res.data;
            setVdata(volunteerdata)
        })
    }
    useEffect(()=>getVdata(), [])
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
                    <thead className="VolunteerItem">
                        <tr>
                            <th scope="col"> Volunteer ID</th>
                            <th scope="col">Volunteer Name</th>
                            <th scope="col">Volunteer Email</th>
                        </tr>
                    </thead>
                    <tbody className="VolunteerItem">
                        {vdata.map(item => {
                            return (
                                    <tr key={item.VolunteerId}>
                                        <td>{item.VolunteerId}</td>
                                        <td>{item.VolunteerName}</td>
                                        <td>{item.VolunteerEmail}</td>
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

export default VolunteerList;
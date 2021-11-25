import './ManageReferee.scss';
import React, { useEffect, useState } from 'react'
import Alerts from './Alerts';
import axios from "axios";

import Table from "react-bootstrap/Table";
import { Container, Col, Input, Button
  } from "reactstrap";
  
  const TableHeader = () => (
    <thead>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Username</th>
      <th>Contact Number </th>
      <th>DOB</th>
      <th>Event Category</th>
      <th>Assign Match</th>
      <th></th>
    </thead>
  );
  
const ManageReferee = () => {
	// const url = "/api/faq/faq-director";

    // const [data, setData] = useState({
    //     refereeName: "",
    //     refereeEmail: "",
    //     refereeUsername: "",
    //     refereePhonenumber: "",
    //     refereeDob: "",
    //     refereeEventcategory: "",
            
    //   });

    // const submit = (e) => {
    // e.preventDefault();

    // axios
    //   .post(
    //     url,
    //     {
    //       refereeName: data.refereeName,
    //       refereeEmail: data.refereeEmail,
    //       refereeUsername: data.refereeUsername,
    //       refereePhonenumber: data.refereePhonenumber,
    //       refereeDob: data.refereeDob,
    //       refereeEventcategory: data.refereeEventcategory,
    //     },
    //     {
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    // };
    const url = '/api/referee/registration';
    var newData = [];
   const [refereeData, setData] = useState(newData)
   useEffect(() => {
    getAllReferee();

  }, []);

  const getAllReferee = () => {
    axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      newData = response.data;
      setData(newData);
    })
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
        </div>
        <Container className="py-lg-md d-flex">
          <div className="col px-0">
            <Col lg="12">
              <h1 className="display-3 text-white">Referee Management</h1>
            </Col>

            <Table striped bordered hover>
              <TableHeader></TableHeader>
              <tbody>
                {
                    refereeData.map((referee, index) =>{
                      if(referee.matchAssign == "Not Assigned")
                        return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{referee.refereeName}</td>
                            <td>{referee.refereeEmail}</td>
                            <td>{referee.refereeUsername}</td>
                            <td>{referee.refereePhonenumber}</td>
                            <td>{referee.refereeDob}</td>
                            <td>{referee.refereeEventcategory}</td>
                            <td>
                                <Input
                                placeholder="Match Name"
                                type="text"
                                id="matchName"/>
                            </td>
                            <td>
                                <Button className="mt-4" color="warning" type="submit">
						        Submit
					           </Button>
                            </td>
                          </tr>
                          )
                    })
                }
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
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </div>
    </div>
);
}

export default ManageReferee;
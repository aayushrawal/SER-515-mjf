import './RefereeItem.scss';
import React, { useEffect, useState } from 'react'
import Alerts from './Alerts';
import axios from "axios";

import Table from "react-bootstrap/Table";
import {
  Container, Col, Input, Button
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

const RefereeItem = ({ item }) => {

  const urlPut = "/api/referee/assign-referee/";
  const [data, updateData] = useState({
    matchAssign: ""
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    updateData(newdata);
  };

  const submit = (e) => {
    e.preventDefault();
    
    axios
      .put(
        urlPut + item._id,
        {
          matchAssign: data.matchAssign
        },
      )
      window.location.reload(false);
  };
  let counter = 0;
  return (
    <>
                          <td>{item.refereeName}</td>
                          <td>{item.refereeEmail}</td>
                          <td>{item.refereeUsername}</td>
                          <td>{item.refereePhonenumber}</td>
                          <td>{item.refereeDob}</td>
                          <td>{item.refereeEventcategory}</td>
                          <td>{item.matchAssign}</td>
                          <td>
                            <Input
                              placeholder="Match Name"
                              type="text"
                              id="matchAssign"
                              onChange={handle}
                              value={data.matchAssign} />
                          </td>
                          <td>
                            <Button block
                              className="btn-round"
                              color="default"
                              size="lg"
                              type="button"
                              onClick={submit}>
                              Submit
                            </Button>
                          </td>  
          </>
  );
}

export default RefereeItem;
import './RefereeItem.scss';
import React, { useState } from 'react'
import axios from "axios";

import {
  Input, Button
} from "reactstrap";


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
import React from "react";
import { Button, Table } from "reactstrap";
import "./AcceptReferee.scss";

const AcceptReferee = ({ refereeList }) => {
  const handleAccept = (e) => {
    e.preventDefault();
    console.log("Accepted");
  };

  const handleReject = (e) => {
    e.preventDefault();
    console.log("Rejected");
  };
  return (
    <Table responsive striped bordered size="sm" dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Category</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {refereeList.map((referee, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{referee.refereeName}</td>
            <td>{referee.refereeEmail}</td>
            <td>{referee.refereeEventcategory.split(" - ")[1]}</td>
            <td>
              <Button
                size="sm"
                color="success"
                type="submit"
                onClick={handleAccept}
              >
                Accept
              </Button>
              <Button
                size="sm"
                color="warning"
                type="submit"
                onClick={handleReject}
              >
                Reject
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AcceptReferee;

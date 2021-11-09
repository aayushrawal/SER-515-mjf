import React from "react";

import { Alert } from "reactstrap";

const Alerts = ({ color, status, message }) => {
  return (
    <>
      <Alert color={color}>
        <strong>{status}</strong> {message}
      </Alert>
    </>
  );
};

export default Alerts;

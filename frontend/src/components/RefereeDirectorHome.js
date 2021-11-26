import React from "react";
import "./RefereeDirectorHome.scss";

import { Button, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";

const RefereeDirectorHome = () => {
  return (
    <section className="section section-lg section-shaped main-section">
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
      <div className="refereedirectorhome">
        <div className="refereedirectorhome-Body">
          <div className="col-12">
            <br />
            <br />
            <div className="text-center">
              <Button
                to="/"
                tag={Link}
                className="mt-4 btn btn-default"
                color="info"
              >
                Manage Referee Schedules
              </Button>
            </div>
            <br />
            <div className="text-center">
              <Button
                to="/referee-director/applications"
                className="btn btn-default mt-4"
                color="info"
                tag={Link}
              >
                Manage Referee Applications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefereeDirectorHome;

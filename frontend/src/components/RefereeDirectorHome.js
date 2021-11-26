import React from "react";
import "./RefereeDirectorHome.scss";

import { Button, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";

const RefereeDirectorHome = () => {
  const RefereeSchedules = (e) => {
    e.preventDefault();
  };
  const RefereeApplications = (e) => {
    e.preventDefault();
  };
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
              <NavbarBrand to="/" tag={Link}>
                <Button
                  onClick={RefereeSchedules}
                  className="mt-4 btn btn-default"
                  color="info"
                  type="submit"
                >
                  Manage Referee Schedules
                </Button>
              </NavbarBrand>
            </div>
            <br />
            <div className="text-center">
              <NavbarBrand to="/" tag={Link}>
                <Button
                  onClick={RefereeApplications}
                  className="btn btn-default mt-4"
                  color="info"
                  type="submit"
                >
                  Manage Referee Applications
                </Button>
              </NavbarBrand>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefereeDirectorHome;

import React from "react";
import "./TournamentDirectorHome.scss";

import { Button, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";

const TournamentDirectorHome = () => {
  const EditFAQ = (e) => {
    e.preventDefault();
  };
  const ManageHotel = (e) => {
    e.preventDefault();
  };  
  const ManageSponsors = (e) => {
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
      <div className="tournamentdirectorhome">
        <div className="tournamentdirectorhome-Body">
          <div className="col-12">
            <div className="text-center">
              <NavbarBrand to="/tournament-director/faq-creation" tag={Link}>
                <Button
                  onclick={EditFAQ}
                  className="mt-4"
                  color="info"
                  type="submit"
                  class="btn btn-default"
                >
                  Edit FAQ's Page
                </Button>
              </NavbarBrand>
            </div>
            <div className="text-center">
              <NavbarBrand to="/tournament-director/manage-hotel" tag={Link}>
                <Button
                  onclick={ManageHotel}
                  className="mt-4"
                  color="info"
                  type="submit"
                  class="btn btn-default"
                >
                  Manage Hotels Page
                </Button>
              </NavbarBrand>
            </div>
            <div className="text-center">
              <NavbarBrand
                to="/tournament-director/sponsor-creation"
                tag={Link}
              >
                <Button
                  onclick={ManageSponsors}
                  className="mt-4"
                  color="info"
                  type="submit"
                  class="btn btn-default"
                >
                  Manage Sponsors Page
                </Button>
              </NavbarBrand>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentDirectorHome;

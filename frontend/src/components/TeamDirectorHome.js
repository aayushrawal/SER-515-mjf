import React from "react";
import "./TeamDirectorHome.scss";

import { Button, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";

const TeamDirectorHome = () => {
    const AcceptApplications = (e) => {
        e.preventDefault();
    }
    const ScheduleMatches = (e) => {
        e.preventDefault();
    }
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
                            <NavbarBrand to="/team-applications" tag={Link}>
                                <Button onclick={AcceptApplications}
                                    className="mt-4"
                                    color="info"
                                    type="submit"
                                    class="btn btn-default"
                                >Accept Team Appications
                                </Button>
                            </NavbarBrand>
                        </div>
                        <div className="text-center">
                            <NavbarBrand to="/schedule-matches" tag={Link}>
                                <Button onclick={ScheduleMatches}
                                    className="mt-4"
                                    color="info"
                                    type="submit"
                                    class="btn btn-default"
                                >Schedule Matches
                                </Button>
                            </NavbarBrand>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamDirectorHome;

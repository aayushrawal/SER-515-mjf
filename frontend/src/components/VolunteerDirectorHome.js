import React from "react";
import "./VolunteerDirectorHome.scss";

import { Button, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";

const VolunteerDirectorHome = () => {
    const TrackHostTeams = (e) => {
        e.preventDefault();
    }
    const TrackVolunteerHours = (e) => {
        e.preventDefault();
    }
    const TrackVolunteerRoles = (e) => {
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
            <div className="volunteerdirectorhome">
                <div className="volunteerdirectorhome-Body">
                    <div className="col-12">
                        <div className="text-center">
                            <NavbarBrand to="/" tag={Link}>
                                <Button onclick={TrackHostTeams}
                                    className="mt-4"
                                    color="info"
                                    type="submit"
                                    class="btn btn-default"
                                >Track Host Teams
                                </Button>
                            </NavbarBrand>
                        </div>
                        <div className="text-center">
                            <NavbarBrand to="/" tag={Link}>
                                <Button onclick={TrackVolunteerHours}
                                    className="mt-4"
                                    color="info"
                                    type="submit"
                                    class="btn btn-default"
                                >Track Volunteer Hours
                                </Button>
                            </NavbarBrand>
                        </div>
                        <div className="text-center">
                            <NavbarBrand to="/" tag={Link}>
                                <Button onclick={TrackVolunteerRoles}
                                    className="mt-4"
                                    color="info"
                                    type="submit"
                                    class="btn btn-default"
                                >Track Volunteer Roles
                                </Button>
                            </NavbarBrand>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerDirectorHome;
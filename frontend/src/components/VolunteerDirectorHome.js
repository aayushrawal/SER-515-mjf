import React from "react";
import "./VolunteerDirectorHome.scss";

import { Button, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";

const VolunteerDirectorHome = () => {
    const AssignVolunteer = (e) => {
        e.preventDefault();
    }
    const ListVolunteer = (e) => {
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
                            <NavbarBrand to="/Assign-Volunteer" tag={Link}>
                                <Button onclick={AssignVolunteer}
                                    className="mt-4"
                                    color="info"
                                    type="submit"
                                    class="btn btn-default"
                                >Assign Match to Volunteers
                                </Button>
                            </NavbarBrand>
                        </div>
                        <div className="text-center mx-auto d-block">
                            <NavbarBrand to="/List-Volunteer" tag={Link}>
                                <Button onclick={ListVolunteer}
                                    className="mt-4"
                                    color="info"
                                    type="submit"
                                    class="btn btn-default"
                                >List Of Volunteers
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
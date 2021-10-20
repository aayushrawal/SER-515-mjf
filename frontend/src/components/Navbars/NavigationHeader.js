import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const NavigationHeader = () => {
  const [collapseClasses, setCollapseClasses] = useState("");

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              SPARKY'S
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                      SPARKY'S
                    </NavbarBrand>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    FAQs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Hotels
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Rules
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Referees
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Sponsors
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default NavigationHeader;

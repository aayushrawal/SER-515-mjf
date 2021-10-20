import React from "react";
import "./Landing.scss";

import NavigationHeader from "./Navbars/NavigationHeader.js";

import Home from "./Home";

const Landing = () => {
  return (
    <>
      <NavigationHeader />
      <Home />
    </>
  );
};

export default Landing;

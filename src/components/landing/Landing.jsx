import React, { Fragment } from "react";
// Components
import Hero from "./Hero";
import Partners from "./Partners";
import CollaborateWithUs from "./CollaborateWithUs";
import LandingMethods from "./LandingMethods";
import BusinessStregyModel from "./BusinessStrategyModel";

const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Partners />
      <CollaborateWithUs />
      <LandingMethods />
      <BusinessStregyModel />
    </Fragment>
  );
};

export default Landing;

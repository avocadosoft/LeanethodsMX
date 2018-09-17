import React, { Fragment } from "react";
// Components
import Hero from "./Hero";
import Partners from "./Partners";
import CollaborateWithUs from "./CollaborateWithUs";
import LandingMethods from "./LandingMethods";

const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Partners />
      <CollaborateWithUs />
      <LandingMethods />
    </Fragment>
  );
};

export default Landing;

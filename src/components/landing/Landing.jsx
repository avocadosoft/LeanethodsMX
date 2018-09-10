import React, { Fragment } from "react";
// Components
import Hero from "./Hero";
import Partners from "./Partners";

const Landing = props => {
  return (
    <Fragment>
      <Hero />
      <Partners />
    </Fragment>
  );
};

export default Landing;

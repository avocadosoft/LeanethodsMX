import React, { Fragment } from "react";

// Components
import Banner from "../sharedComponents/Banner";
import BusinessStregyModel from "../sharedComponents/BusinessStrategyModel";
import Quote from "./Quote";
import Cards from "./Cards";

const Methods = () => {
  return (
    <Fragment>
      <Banner
        img={"methods-banner.jpg"}
        title={"Our Methods"}
        text={`Methodology is at the heart of everything we do at the Lean
                  Methods Group. Proven, effective methods enable objectivity
                  and speed-to-results. Without methodologies, it is impossible
                  for true collaboration between your team and ours to flourish
                  and it is impossible for you to truly have confidence in what
                  you are getting for your investment.`}
      />
      <Quote />
      <Cards />
      <BusinessStregyModel />
    </Fragment>
  );
};

export default Methods;

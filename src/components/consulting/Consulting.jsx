import React, { Fragment } from "react";

// Components
import Banner from "../sharedComponents/Banner";

const Consulting = () => {
  return (
    <Fragment>
      <Banner
        img={"consulting-banner.jpg"}
        title={"Consulting & Facilitating"}
        text={`Lean Methods’ consultants use proven, best-practice methodologies to drive solutions to your most important problems. 
        We choose the right methodology based on each problem, rather than taking a one-size-fits-all approach. 
        All methodologies are selected and honed to work best in a highly collaborative manner.`}
      />
    </Fragment>
  );
};

export default Consulting;

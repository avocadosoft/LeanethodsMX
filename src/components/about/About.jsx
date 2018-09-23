import React, { Fragment } from "react";

// Components
import Banner from "../sharedComponents/Banner";

const About = () => {
  return (
    <Fragment>
      <Banner
        img={"about-banner.jpg"}
        title={"About Lean Methods"}
        text={`The Lean Methods Group is a global management consulting firm specializing in the application of highly collaborative and methodical approaches to business performance improvement.
         Our business model is simple: we apply Lean methodologies to all aspects of our client's business. 
         Through our portfolio of Strategy, Innovation, Performance Excellence, and Data Analytics methods,
         we help you solve today's toughest problems while building your team's capabilities so you can sustain success and drive change tomorrow.`}
      />
    </Fragment>
  );
};

export default About;

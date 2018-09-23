import React, { Component } from "react";

// Components
import HeroBanner from "../../sharedComponents/HeroBanner";

export default class SixSigma extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          img={"mhb-six.png"}
          title={"Six Sigma"}
          text={`Six Sigma is a time-tested approach to process optimization. Its central focus is the elimination of process variation through the methodical application of data-driven tools. Six Sigma is also embraced more holistically as a means of driving cultural transformation in the direction of structured problem solving and data-driven decision making.`}
        />
      </div>
    );
  }
}

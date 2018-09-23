import React, { Component } from "react";

// Components
import HeroBanner from "../../sharedComponents/HeroBanner";

export default class Hoshin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          img={"mhb-hoshin.png"}
          title={"Hoshin Planning"}
          text={`Hoshin Planning, often referred to as Strategic Planning or Policy Deployment, is a highly structured and lean methodology used to accelerate and bring rigor to strategy execution. Hoshin Plans (sometimes referred to as X-Matrices) are developed through highly collaborative workshops that drive engagement, buy-in, and detailed action planning followed by a disciplined and methodical approach to accountability.`}
        />
      </div>
    );
  }
}

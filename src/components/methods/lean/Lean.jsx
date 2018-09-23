import React, { Component } from "react";

// Components
import HeroBanner from "../../sharedComponents/HeroBanner";

export default class Lean extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          img={"mhb-lean.png"}
          title={"Lean"}
          text={`When used in its purest sense, Lean refers to a methodical approach to eliminating waste in an organization by promoting a culture that relentlessly pursues solutions to problems. Lean Methods consultants, coaches, and trainers work with organizations to implement the principles of Lean and the accompanying tools necessary to realize the vision of a truly lean enterprise.`}
        />
      </div>
    );
  }
}

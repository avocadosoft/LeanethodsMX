import React, { Component } from "react";

// Components
import HeroBanner from "../../sharedComponents/HeroBanner";

export default class Strategy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          img={"mhb-strat.png"}
          title={"Strategy Development"}
          text={`It turns out that the challenge most companies face with strategy execution has little to do with their ability to execute strategy. Instead, the problem lies in the lack of strategy itself. Our Strategy Development practice is dedicated to periodic strategic renewal or, in some cases, that once-in-a-generation creation of entirely new strategy.`}
        />
      </div>
    );
  }
}

import React, { Component } from "react";

// Components
import HeroBanner from "../../sharedComponents/HeroBanner";

export default class Innovation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          img={"mhb-innovation.png"}
          title={"Innovation"}
          text={`There’s no longer any doubt that to thrive, we must innovate. But that’s easier said than done. Only through a research-based, methodical and highly collaborative approach to innovation can today’s business leaders have confidence that their company will rise to the occasion. Our structured innovation methodologies are designed to drive innovation as a process, not merely an aspiration.`}
        />
      </div>
    );
  }
}

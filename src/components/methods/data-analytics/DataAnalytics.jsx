import React, { Component } from "react";

// Components
import HeroBanner from "../../sharedComponents/HeroBanner";

export default class DataAnalytics extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HeroBanner
          img={"mhb-data.png"}
          title={"Data Analytics"}
          text={`The value of data has been known for more than 100 years. How to get value out of data has always been the challenge. In the modern era of big data and data analytics, the value gap turns out to be in the past, with executives and managers who have never been trained to take advantage of their new data assets (both people and technology). Leveraging Lean Methods’ vast capability in data analysis, strategy, and innovation, the focus of our Data Analytics practice is bridging the gap between analysis and value.`}
        />
      </div>
    );
  }
}

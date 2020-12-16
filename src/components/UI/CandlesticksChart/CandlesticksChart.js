import React, { Component, useState } from "react";
import * as d3 from "d3";

import "./CandlesticksChart.css";
import Chart from "./Chart/Chart";
import { fetchCsv, parseHistoricalData } from "../../../helpers/csv-reader";

const chart_width = window.innerWidth-239-150-48;
const chart_height = 400;
let bars_displayed = 40;
let last_bar_displayed = 0;

class CandlesticksChart extends Component {

  state = {
    data: null,
  }

  async componentWillMount() {
    const ibovCSV = await fetchCsv('/assets/indexes/ibov.csv');
    const ibovData = parseHistoricalData(ibovCSV);
  
    this.setState({
      data: ibovData
    });
  }



  generateData = (ibovData) => {
    const length = Math.round(Math.random() * 90) + 10;

    // initial values
    const seed_close = Math.random() * 150 + 50;
    let previous_close = seed_close;
    let previous_volume = Math.random() * 300 + 10;
    let trend = Math.floor(Math.random() * 2) * 2 - 1;

    // calculate each bar
    return d3.range(length).map((item, i) => {
      const open = previous_close * (1 + this.randomOne(0.1));
      const close = open * (1 + this.randomOne(0.2) * trend);
      const high = Math.max(open, close) * (1 + this.randomOne(0.1));
      const low = Math.min(open, close) * (1 - this.randomOne(0.1));
      const volume = previous_volume * (1 + this.randomOne(0.5));

      previous_close = close;
      trend = Math.floor(Math.random() * 2) * 2 - 1;

      return {
        time: i,
        open,
        high,
        low,
        close,
        volume
      };
    });
  };

  randomOne = (weight = 1) => {
    return (Math.random() + Math.random() - 1) * weight;
  };

render() {
  return (
    <div className="App">
      <div className="content">
        <div>
          { this.state.data ? <Chart data={this.state.data} width={chart_width} height={chart_height} /> : null }
        </div>
      </div>
    </div>
  );
}

}

export default CandlesticksChart;
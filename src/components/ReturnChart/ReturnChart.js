import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';

import LineChart from '../UI/LineChart/LineChart';
import * as actions from '../../store/actions/returns';

class ReturnChart extends Component {

  componentDidMount = () => {
    console.log(this.props.returnsData);
    this.props.onInitReturnsData(this.props.returnsData);
    console.log(this.props);
  }

  // regenerateData = () => {
  //   console.log(this.props);
  //   const chartData = [];
  //   for (let i = 0; i < 20; i++) {
  //     const value = Math.floor(Math.random() * i + 3);
  //     chartData.push({
  //       label: i,
  //       value,
  //       tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`
  //     });
  //   }
  //   setData(chartData)
  // }
  render () {
    const chartData = [];
    for (let i = 0; i < 30; i++) {
      const value = Math.floor(Math.random() * i + 3);
      chartData.push({
        label: i,
        value,
        tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`
      });
      console.log(chartData);
    }
    console.log('OBJETO FINAL ',this.props.returnsData);
    console.log('chartData ',chartData);
    return <div className="App">
      <LineChart data={this.props.returnsData} width={window.innerWidth-239-150-48} height={300} />
    </div>
  }
}

const mapStateToProps = state => {
  return {
    returnsData: state.returns.returnsData,
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onInitReturnsData: (data) => dispatch(actions.initReturnsData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturnChart);
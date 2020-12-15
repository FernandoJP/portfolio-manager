import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';

import LineChart from '../UI/LineChart/LineChart';
import * as actions from '../../store/actions/returns';

class ReturnChart extends Component {

  render () {
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
      onInitReturnsData: (data) => dispatch(actions.setReturnsData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturnChart);
import React, { useState, useEffect } from 'react';
import LineChart from '../UI/LineChart/LineChart';

function ReturnChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    regenerateData();
  }, []);

  function regenerateData() {
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      const value = Math.floor(Math.random() * i + 3);
      chartData.push({
        label: i,
        value,
        tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`
      });
      console.log(chartData);
    }
    setData(chartData)
  }

  return (
    <div className="App">
      <LineChart data={data} width={window.innerWidth-239-150-48} height={300} />
    </div>
  );
}

export default ReturnChart;
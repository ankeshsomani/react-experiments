import React from "react";
import * as ReactD3 from 'react-d3-components'

export function BarChart1() {
  var BarChart = ReactD3.BarChart;
 
  var data = [{
      label: 'Expenses - June 2023',
      values: [{x: '01', y: 100}, {x: '02', y: 457}, {x: '11', y: 330}]
  }];
   
  return(
      <BarChart
          data={data}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
  );
}
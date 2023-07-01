import React, { Component } from 'react';
import { PieChart } from 'react-d3-components';


function PieChart1() {

  var data = {
    label: 'Expenses',
    values: [{ x: 'Food', y: 2000 }, { x: 'tatataar', y: 1687 }, { x: 'Grocery', y: 3903 }]
  };

  var tooltipScatter = function(x, y) {
    return "x: " + x + " y: " + y;
};

  var sort = null;

  return (
  <PieChart
    data={data}
    width={600}
    height={400}
    margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
    sort={sort}
  />
  )
}

export default PieChart1;
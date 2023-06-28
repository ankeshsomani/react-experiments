import { useD3 } from './hooks/useD3';
import React, { useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';
import moment from 'moment/moment';

function BarChart() {
  // const baseUrl = "http://localhost:8082/api/expenses";
  // const [chartData, setChartData] = useState([])

  // const response = axios.get(baseUrl).then((response) => {
  //    // console.log('...response is :--'+ JSON.stringify(response));
  //     var temp1 = response.data;
  //     var temp2 =temp1.map(function (val, index) {
  //         const id = moment(val.expenseid);
  //         const formattedid = id.format('DD-MM-YYYY');
  //        // console.log(formattedid); // "03-06-2023"
  //         return { id: formattedid, amount: val.amount };
  //     })
  //     setChartData(temp2);
  //    // console.log(' formatted data now is :----'+ JSON.stringify(temp2));
  //    // data = temp2;
  // });

  // const data = chartData;
  // console.log(' formatted data now back is :----'+ JSON.stringify(data));


  const data = [
    {
      "id": 50,
      "expensedate": "2023-06-19T00:00:00.000Z",
      "description": "Activa petrol",
      "category": "Others"
    },
    {
      "amount": "150.00",
      "id": 51,
      "expensedate": "2023-06-19T00:00:00.000Z",
      "description": "Magarpatta citizen card",
      "category": "Others"
    },
    {
      "amount": "370.00",
      "id": 52,
      "expensedate": "2023-06-18T00:00:00.000Z",
      "description": "Kalika sweets and paneer",
      "category": "Food"
    },
    {
      "amount": "100.00",
      "id": 53,
      "expensedate": "2023-06-18T00:00:00.000Z",
      "description": "Pav and bread",
      "category": "Food"
    },
    {
      "amount": "100.00",
      "id": 54,
      "expensedate": "2023-06-17T00:00:00.000Z",
      "description": "Laundry",
      "category": "Others"
    },
    {
      "amount": "760.00",
      "id": 55,
      "expensedate": "2023-06-18T00:00:00.000Z",
      "description": "Start Bazar fruits and vegetables",
      "category": "Vegetables and Fruits"
    },
    {
      "amount": "100.00",
      "id": 56,
      "expensedate": "2023-06-20T00:00:00.000Z",
      "description": "Jyoti bai salary",
      "category": "Rent and household services"
    },
    {
      "amount": "720.00",
      "id": 57,
      "expensedate": "2023-06-20T00:00:00.000Z",
      "description": "Urban clap parlor",
      "category": "Others"
    },
    {
      "amount": "380.00",
      "id": 58,
      "expensedate": "2023-06-20T00:00:00.000Z",
      "description": "Amazon cupboard lock",
      "category": "Others"
    },
    {
      "amount": "746.00",
      "id": 59,
      "expensedate": "2023-06-24T00:00:00.000Z",
      "description": "Amazon fresh",
      "category": "Grocery"
    },
    {
      "amount": "380.00",
      "id": 60,
      "expensedate": "2023-06-23T00:00:00.000Z",
      "description": "Child Lock from amazon",
      "category": "Others"
    },
    {
      "amount": "2000.00",
      "id": 61,
      "expensedate": "2023-06-21T00:00:00.000Z",
      "description": "Petrol in car",
      "category": "Travel Expense"
    },
    {
      "amount": "2400.00",
      "id": 62,
      "expensedate": "2023-06-21T00:00:00.000Z",
      "description": "octant pizza birthday party",
      "category": "Entertainment"
    },
    {
      "amount": "200.00",
      "id": 63,
      "expensedate": "2023-06-21T00:00:00.000Z",
      "description": "Vegetables and Fruits from balaji temple",
      "category": "Vegetables and Fruits"
    },
    {
      "amount": "350.00",
      "id": 64,
      "expensedate": "2023-06-21T00:00:00.000Z",
      "description": "Cake birthday neha",
      "category": "Food"
    },
    {
      "amount": "200.00",
      "id": 65,
      "expensedate": "2023-06-24T00:00:00.000Z",
      "description": "Ankesh Office expense",
      "category": "Others"
    },
    {
      "amount": "600.00",
      "id": 66,
      "expensedate": "2023-06-26T00:00:00.000Z",
      "description": "Krishna Vaccine",
      "category": "Others"
    },
    {
      "amount": "170.00",
      "id": 67,
      "expensedate": "2023-06-26T00:00:00.000Z",
      "description": "Reyansh Socks",
      "category": "Clothes and Footwear"
    },
    {
      "amount": "864.00",
      "id": 68,
      "expensedate": "2023-06-25T00:00:00.000Z",
      "description": "Star bazar shopping",
      "category": "Grocery"
    },
    {
      "amount": "270.00",
      "id": 69,
      "expensedate": "2023-06-24T00:00:00.000Z",
      "description": "Apsara ice cream",
      "category": "Others"
    },
    {
      "amount": "2623.00",
      "id": 70,
      "expensedate": "2023-06-25T00:00:00.000Z",
      "description": "Dmart ready Grocery",
      "category": "Grocery"
    },
    {
      "amount": "186.00",
      "id": 71,
      "expensedate": "2023-06-26T00:00:00.000Z",
      "description": "Kalika doodh and paneer",
      "category": "Grocery"
    },
    {
      "amount": "140.00",
      "id": 72,
      "expensedate": "2023-06-26T00:00:00.000Z",
      "description": "Aunty food cooking payment",
      "category": "Rent and household services"
    },
    {
      "amount": "464.00",
      "id": 73,
      "expensedate": "2023-06-26T00:00:00.000Z",
      "description": "Naturals ice cream",
      "category": "Others"
    }
  ]
  const ref = useD3(
    (svg) => {
      const height = 600;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.id))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.amount)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.id))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.amount))
        .attr("height", (d) => y1(0) - y1(d.amount));
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 600,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default BarChart;
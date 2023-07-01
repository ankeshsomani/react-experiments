import { useD3 } from "./hooks/useD3";
import React, { useState } from "react";
import * as d3 from "d3";
import axios from "axios";
import moment from "moment/moment";

function BarChart(props) {
  const data = props.data;
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

  // const data1 = [{"amount":"514.00","id":9,"expensedate":"2023-06-03T00:00:00.000Z","description":"Amazon Fresh","category":"Grocery"},{"amount":"1141.00","id":10,"expensedate":"2023-06-04T00:00:00.000Z","description":"Dmart Ready","category":"Grocery"},{"amount":"300.00","id":11,"expensedate":"2023-06-03T00:00:00.000Z","description":"Outside Food","category":"Food"},{"amount":"200.00","id":12,"expensedate":"2023-06-02T00:00:00.000Z","description":"Pastry and Gola","category":"Food"},{"amount":"541.00","id":13,"expensedate":"2023-06-02T00:00:00.000Z","description":"Sweets and Paneer","category":"Food"},{"amount":"170.00","id":14,"expensedate":"2023-06-01T00:00:00.000Z","description":"Naturals Ice Cream","category":"Food"},{"amount":"545.00","id":15,"expensedate":"2023-06-04T00:00:00.000Z","description":"Vegetables and Fruits","category":"Food"},{"amount":"500.00","id":16,"expensedate":"2023-06-04T00:00:00.000Z","description":"Car and Activa Wash Monthly","category":"Rent and Fixed Services"},{"amount":"20000.00","id":17,"expensedate":"2023-06-01T00:00:00.000Z","description":"House Rent","category":"Rent and Fixed Services"},{"amount":"40.00","id":18,"expensedate":"2023-06-01T00:00:00.000Z","description":"Tea in office by Ankesh","category":"Others"},{"amount":"700.00","id":19,"expensedate":"2023-05-06T00:00:00.000Z","description":"ramayan book","category":"Others"},{"amount":"2710.00","id":20,"expensedate":"2023-06-05T00:00:00.000Z","description":"April and may electricity bill","category":"Rent and household services"},{"amount":"80.00","id":21,"expensedate":"2023-06-04T00:00:00.000Z","description":"Ankesh shaving","category":"Others"},{"amount":"150.00","id":22,"expensedate":"2023-06-05T00:00:00.000Z","description":"Reyansh haircut","category":"Others"},{"amount":"155.00","id":23,"expensedate":"2023-06-04T00:00:00.000Z","description":"Other food expenses","category":"Others"},{"amount":"700.00","id":26,"expensedate":"2023-06-09T00:00:00.000Z","description":"Amazon Delivery ","category":"Others"},{"amount":"600.00","id":27,"expensedate":"2023-06-09T00:00:00.000Z","description":"Amazon Gift for ram","category":"Others"},{"amount":"670.00","id":28,"expensedate":"2023-06-11T00:00:00.000Z","description":"Vegetables and Fruits from farmers market pune","category":"Vegetables and Fruits"},{"amount":"300.00","id":29,"expensedate":"2023-06-11T00:00:00.000Z","description":"Clay pot ","category":"Others"},{"amount":"850.00","id":30,"expensedate":"2023-06-10T00:00:00.000Z","description":"Star Bazzar ","category":"Vegetables and Fruits"},{"amount":"345.00","id":31,"expensedate":"2023-06-12T00:00:00.000Z","description":"Naturals ice cream","category":"Food"},{"amount":"500.00","id":32,"expensedate":"2023-06-12T00:00:00.000Z","description":"Country Delight recharge","category":"Food"},{"amount":"1475.00","id":33,"expensedate":"2023-06-11T00:00:00.000Z","description":"Milk payment","category":"Food"},{"amount":"88.00","id":34,"expensedate":"2023-06-13T00:00:00.000Z","description":"Laundry","category":"Others"},{"amount":"650.00","id":35,"expensedate":"2023-06-11T00:00:00.000Z","description":"Farmers market ","category":"Vegetables and Fruits"},{"amount":"70.00","id":36,"expensedate":"2023-06-13T00:00:00.000Z","description":"Ankesh Office Tea and Bhel","category":"Others"},{"amount":"29000.00","id":37,"expensedate":"2023-06-14T00:00:00.000Z","description":"LLoyds ac 1 ton- amazon","category":"Others"},{"amount":"15000.00","id":38,"expensedate":"2023-06-15T00:00:00.000Z","description":"Transferred to Mummy(Neemuch)","category":"Others"},{"amount":"1000.00","id":39,"expensedate":"2023-06-16T00:00:00.000Z","description":"AC installation magarpatta PMS","category":"Others"},{"amount":"460.00","id":40,"expensedate":"2023-06-18T00:00:00.000Z","description":"Vegetables farmer market","category":"Vegetables and Fruits"},{"amount":"2515.00","id":41,"expensedate":"2023-06-17T00:00:00.000Z","description":"AC installation charges","category":"Others"},{"amount":"470.00","id":42,"expensedate":"2023-06-17T00:00:00.000Z","description":"Hardware shop- AC bird removers and switch","category":"Others"},{"amount":"3200.00","id":43,"expensedate":"2023-06-17T00:00:00.000Z","description":"Neha Cloths shopping from centro","category":"Clothes and Footwear"},{"amount":"2400.00","id":44,"expensedate":"2023-06-17T00:00:00.000Z","description":"Neha Cloths shopping from azorte","category":"Clothes and Footwear"},{"amount":"1284.00","id":45,"expensedate":"2023-06-18T00:00:00.000Z","description":"Train ticket mummy neemuch","category":"Travel Expense"}];

  // const data = data1.map(function (expense) {
  //   var expenseDate1 = new Date(expense.expensedate).getDate();
  //   var formattedJson = {
  //     amount: expense.amount,
  //     id: expense.id,
  //     expensedate: expenseDate1,
  //     description: expense.description,
  //     category: expense.category
  //   };
  //   return formattedJson;
  // });
  const ref = useD3(
    (svg) => {
      const height = 600;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.expensedate))
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
        .attr("x", (d) => x(d.expensedate))
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

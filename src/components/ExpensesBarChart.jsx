import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import axios from "axios";

const ExpensesBarChart = () => {
  const [expenses, setExpenses] = useState([]);
  const [frequency, setFrequency] = useState("monthly");

  const baseUrl = "http://localhost:8082/api/expenses";
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => response.data)
      .then((data) => setExpenses(data));
  }, []);

  const renderExpenses = () => {
    // const expensesByFrequency = expenses.reduce((acc, expense) => {
    //   acc[expense.frequency] = [...acc[expense.frequency], expense.amount];
    //   return acc;
    // }, {});

    const chart = d3.select("#chart");
    const dataToBePlotted = [
      {
        date: "2023-06-15",
        amount: 100,
      },
      {
        date: "2023-06-16",
        amount: 200,
      },
      {
        date: "2023-06-17",
        amount: 300,
      },
      {
        date: "2023-06-18",
        amount: 400,
      },
    ];
    // expenses.map(expense => {dataToBePlotted.push({"date" : expense.expensedate, "amount" : expense.amount})});
    console.log("dataToBePlotted is:--" + JSON.stringify(dataToBePlotted));
    function groupBy(objectArray, property) {
        return objectArray.reduce(function (accumulator, currentObject) {
          let key = currentObject[property];
          if (!accumulator[key]) {
            accumulator[key] = [];
          }
          accumulator[key].push(currentObject);
          return accumulator;
        }, {});
      }



    dataToBePlotted.map(function (record) {
      var modifiedRecord = {
        amount: record.amount,
        id: record.id,
        expensedate: new Date(record.expensedate).getDate(),
        description: record.description,
        category: record.category
      };
      return modifiedRecord;
    });
    chart
      .selectAll(".bar")
      .data(dataToBePlotted, (d) => d.date)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => d)
      .attr("y", (d) => d.amount)
      .attr("width", 1)
      .attr("height", (d) => d.amount);
  };

  return (
    <div>
      <h1>Expenses</h1>
      <div id="chart"></div>
      {renderExpenses()}
    </div>
  );
};

export default ExpensesBarChart;

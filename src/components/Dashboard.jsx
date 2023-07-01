import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Navbar from "./Navbar";
import axios from "axios";
const Dashboard = () => {
  const baseUrl = "http://localhost:8082/api/expenses";

  const [currentMonth, setCurrentMonth] = useState();
  const [prevMonth, setPrevMonth] = useState();
  const [totalExpenses, setTotalExpenses] = useState();

  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function groupAmountByDate(objectArray) {
    return objectArray.reduce(function (accumulator, currentObject) {
      let property = "expensedate";
      let key = new Date(currentObject[property]).getDate();
      let amount1 = parseInt(currentObject["amount"]);
      if (!accumulator[key]) {
        accumulator[key] = { expensedate: key, amount: amount1 };
      }
      accumulator[key].amount = accumulator[key].amount + amount1;
      return accumulator;
    }, {});
  }

  function getTotalExpenses(objectArray) {
   
    return objectArray.reduce(function (accumulator, currentObject) {
      let amount1 = parseInt(currentObject["amount"]);
      accumulator = accumulator+ amount1;
      return accumulator;
    }, 0);
  }

  function groupAmountByCategory(objectArray) {
    return objectArray.reduce(function (accumulator, currentObject) {
      let property = "category";
      let key = currentObject[property];
      let amount1 = parseInt(currentObject["amount"]);
      if (!accumulator[key]) {
        accumulator[key] = { category: key, amount: amount1 };
      }
      accumulator[key].amount = accumulator[key].amount + amount1;
      return accumulator;
    }, {});
  }

  function getCurrentMonth() {
    const today = new Date();
    return today.getMonth();
  }

  useEffect(() => {
    setCurrentMonth(monthNames[getCurrentMonth()]);
    setPrevMonth(monthNames[getCurrentMonth() - 1]);

    axios.get(baseUrl).then((response) => {
      //console.log(JSON.stringify(response));
      setTotalExpenses(getTotalExpenses(response.data));
      setBarChartData(Object.values(groupAmountByDate(response.data)));
      setPieChartData(Object.values(groupAmountByCategory(response.data)));
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1>
        {" "}
        Expenses Period <b>{prevMonth} 2023</b> 
        <br/>
        Total expenses are:- <b>{totalExpenses}</b>
      </h1>
      <PieChart
        data={pieChartData}
        width={500}
        height={500}
        innerRadius={180}
        outerRadius={220}
      />
      <BarChart data={barChartData} />
    </>
  );
};

export default Dashboard;

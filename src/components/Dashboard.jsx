import React, { useState, useEffect, ChangeEvent } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

import Navbar from "./Navbar";
import axios from "axios";
import './index.css'
const Dashboard = () => {
  const baseUrl = "http://localhost:8082/api/expenses";

  const [prevMonth, setPrevMonth] = useState();
  const [currentMonth, setCurrentMonth] = useState();

  const [totalExpensesPrevMonth, setTotalExpensesPrevMonth] = useState();
  const [barChartDataPrevMonth, setBarChartDataPrevMonth] = useState([]);
  const [pieChartDataPrevMonth, setPieChartDataPrevMonth] = useState([]);

  const [totalExpensesCurrMonth, setTotalExpensesCurrMonth] = useState();
  const [barChartMonth, setBarChartMonth] = useState('')
  const [pieChartMonth, setPieChartMonth] = useState('')
  const [barChartDataCurrMonth, setBarChartDataCurrMonth] = useState([]);
  const [pieChartDataCurrMonth, setPieChartDataCurrMonth] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPieChartMonth(e.target.value);
    setBarChartMonth(e.target.value);
  };

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
      accumulator = accumulator + amount1;
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

  var data = {
    label: 'Expenses',
    values: [{ x: 'Food', y: 2000 }, { x: 'tatataar', y: 1687 }, { x: 'Grocery', y: 3903 }]
  };

  var tooltipScatter = function (x, y) {
    return "x: " + x + " y: " + y;
  };

  useEffect(() => {
    setCurrentMonth(monthNames[getCurrentMonth()]);
    setPrevMonth(monthNames[getCurrentMonth() - 1]);
    const lastMonthFromDate = "2023-06-01";
    const lastMonthToDate = "2023-06-30";
    const currentMonthFromDate = "2023-07-01";
    const currentMonthToDate = "2023-07-30";


    var expenseForPrevMonthUrl = baseUrl + "?fromDate=" + lastMonthFromDate + "&toDate=" + lastMonthToDate;
    var expenseForCurrMonthUrl = baseUrl + "?fromDate=" + currentMonthFromDate + "&toDate=" + currentMonthToDate;

    axios.get(expenseForPrevMonthUrl).then((response) => {
      //console.log(JSON.stringify(response));
      setTotalExpensesPrevMonth(getTotalExpenses(response.data));
      setBarChartDataPrevMonth(Object.values(groupAmountByDate(response.data)));
      setPieChartDataPrevMonth(Object.values(groupAmountByCategory(response.data)));
    });

    axios.get(expenseForCurrMonthUrl).then((response) => {
      //console.log(JSON.stringify(response));
      setTotalExpensesCurrMonth(getTotalExpenses(response.data));
      setBarChartDataCurrMonth(Object.values(groupAmountByDate(response.data)));
      setPieChartDataCurrMonth(Object.values(groupAmountByCategory(response.data)));
    });
  }, []);

  return (
    <>
      <Navbar balbal />
      Expenses Period in pie chart <b>{prevMonth} 2023</b>
      <br />
      Total expenses for previous month are:- <b>{totalExpensesPrevMonth}</b>
      <br />
      Total expenses for current month are:- <b>{totalExpensesCurrMonth}</b>

      <div className="mydiv">
        <select onChange={handleChange}>
          <option>Current Month</option>
          <option>Previous Month</option>
        </select>
        <p></p>
        <PieChart
          data={pieChartMonth === 'Previous Month' ? pieChartDataPrevMonth : pieChartDataCurrMonth}
          width={500}
          height={500}
          innerRadius={180}
          outerRadius={220} />
        <br /><br /><br />
        <BarChart data={barChartMonth === 'Previous Month' ? barChartDataPrevMonth : barChartDataCurrMonth} />
      </div>
    </>
  );
};

export default Dashboard;

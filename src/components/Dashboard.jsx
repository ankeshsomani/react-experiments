import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Navbar from "./Navbar";
import axios from "axios";
const Dashboard = () => {
  const baseUrl = "http://localhost:8082/api/expenses";

  const [currentMonth, setCurrentMonth] = useState();
  const [prevMonth, setPrevMonth] = useState();

  const [totalExpensesPrevMonth, setTotalExpensesPrevMonth] = useState();
  const [barChartDataPrevMonth, setBarChartDataPrevMonth] = useState([]);
  const [pieChartDataPrevMonth, setPieChartDataPrevMonth] = useState([]);

  const [totalExpensesCurrMonth, setTotalExpensesCurrMonth] = useState();

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
    const lastMonthFromDate = "2023-06-01";
    const lastMonthToDate = "2023-06-30";
    const currentMonthFromDate = "2023-07-01";
    const currentMonthToDate = "2023-07-30";

    var expenseForPrevMonthUrl = baseUrl+"?fromDate="+lastMonthFromDate+"&toDate="+lastMonthToDate;
    var expenseForCurrMonthUrl = baseUrl+"?fromDate="+currentMonthFromDate+"&toDate="+currentMonthToDate;

    axios.get(expenseForPrevMonthUrl).then((response) => {
      //console.log(JSON.stringify(response));
      setTotalExpensesPrevMonth(getTotalExpenses(response.data));
      setBarChartDataPrevMonth(Object.values(groupAmountByDate(response.data)));
      setPieChartDataPrevMonth(Object.values(groupAmountByCategory(response.data)));
    });

    axios.get(expenseForCurrMonthUrl).then((response) => {
      //console.log(JSON.stringify(response));
      setTotalExpensesCurrMonth(getTotalExpenses(response.data));
    });
  }, []);

  return (
    <>
      <Navbar />
      <h2>
        {" "}
        Expenses Period in pie chart <b>{prevMonth} 2023</b> 
        <br/>
        Total expenses for previous month are:- <b>{totalExpensesPrevMonth}</b>
        <br/>
        Total expenses for current month are:- <b>{totalExpensesCurrMonth}</b>

      </h2>
      <PieChart
        data={pieChartDataPrevMonth}
        width={500}
        height={500}
        innerRadius={180}
        outerRadius={220}
      />
      <BarChart data={barChartDataPrevMonth} />
    </>
  );
};

export default Dashboard;

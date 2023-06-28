import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Navbar from "./Navbar";

const Dashboard = () => {
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
          "amount": 464.00,
          "id": 73,
          "expensedate": "2023-06-26T00:00:00.000Z",
          "description": "Naturals ice cream",
          "category": "Others"
        }
    ]
    return (
        <>
            <Navbar/>
            <PieChart data={data}
                width={500}
                height={500}
                innerRadius={180}
                outerRadius={220}
            />
            <BarChart data={data} />
        </>
    )
}

export default Dashboard;
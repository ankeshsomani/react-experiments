import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AxiosHelper from "../Helpers/AxiosHelper";
import axios from "axios";

export default function ListExpense() {
  const baseUrl = "http://localhost:8082/api/expenses";
  const [expenses, setExpenses] = React.useState(null);

  var expenses1 = [
    {
      expenseDate: "01-Jan-2023",
      expenseAmount: 2000,
      category: "Food",
      description: "Dominos Pizza",
    },
    {
      expenseDate: "01-Feb-2023",
      expenseAmount: 250,
      category: "Grocery",
      description: "vegetables and fruits",
    },
  ];

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setExpenses(response.data);
    });
  }, []);

  if (!expenses) return null;

  return (
    <>
      <Navbar />
      <div class="table-responsive scrollbar">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Expense Date</th>
              <th scope="col">Expense Amount</th>
              <th scope="col">Expense Category</th>
              <th scope="col">Expense Description</th>
              <th class="text-end" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr>
                <td>{expense.expensedate}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>

                <td class="text-end">
                  <div class="dropdown font-sans-serif position-static">
                    <button
                      class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="fs--1">...</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end border py-0">
                      <div class="py-2">
                        <a class="dropdown-item" href="#!">
                          Edit
                        </a>
                        <a class="dropdown-item text-danger" href="#!">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

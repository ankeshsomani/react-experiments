import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'


export default function ListExpense() {
  const baseUrl = "http://localhost:8082/api/expenses";
  const [expenses, setExpenses] = React.useState(null);


  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setExpenses(response.data);
    });
  }, []);

  function editExpense() {
    alert('inside edit expense');

  }

  function deleteExpense() {
    alert('inside delete expense');

  }

  if (!expenses) {
    //alert('Failed to get table from database!');
    return null;
  }

  return (
    <>
      <Navbar active="listexpense" />
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
              <tr id={expense.id}>
                <td>{expense.expensedate}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>

                <td class="text-end">
                  <div><button class="btn btn-link p-0" type="button" data-bs-toggle="tooltip" onClick={editExpense} data-bs-placement="top" title="Edit">&#x270E;</button>
                    <button class="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" onClick={deleteExpense} data-bs-placement="top" title="Delete"><span class="trash text-secondary">&#x1f5d1;</span></button></div>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

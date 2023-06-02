import React from "react";
import Navbar from "./Navbar";

export default function ListExpense() {
  const expenses = [
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
                <td>{expense.expenseDate}</td>
                <td>{expense.expenseAmount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>

                <td class="text-end">
                  <div class="dropdown font-sans-serif position-static">
                    <button
                      class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="fas fa-ellipsis-h fs--1">...</span>
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

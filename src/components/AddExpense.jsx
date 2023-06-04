import React, { useState, ChangeEvent } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddExpense() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const addExpenseUrl = "http://localhost:8082/api/expenses";

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const addExpense = () => {
    axios
      .post(addExpenseUrl, {
        expensedate: `${date}`,
        category: `${category}`,
        description: `${desc}`,
        amount: `${amount}`,
      })
      .then((response) => {
        toast.success("Success!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  function ToastTest() {
    toast.success("Success!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>ADD EXPENSE</h1>
        <label class="form-label" for="datepicker">
          Expense Date
        </label>
        <input type="date" class="form-control" onChange={handleDateChange} />
        <p>{date}</p>

        <div class="">
          <label class="form-label" for="exampleFormControlInput1">
            Expense Description
          </label>
          <input
            class="form-control"
            id="expenseDesc"
            type="text"
            placeholder="expense description"
            onChange={handleDescChange}
          />
          <p>{desc}</p>
        </div>

        <div class="">
          <label class="form-label" for="exampleFormControlInput1">
            Expense Amount
          </label>
          <input
            class="form-control"
            id="expenseAmount"
            type="number"
            placeholder="0"
            onChange={handleAmountChange}
          />
          <p>{amount}</p>
        </div>

        <label for="organizerSingle">Expense Category</label>
        <select
          class="form-select js-choice"
          id="organizerSingle"
          size="1"
          name="organizerSingle"
          onChange={handleCategoryChange}
        >
          <option value="">Select Expense Catgeory...</option>
          <option>Entertainment</option>
          <option>Travel Expenses</option>
          <option>Education</option>
          <option>Rent and Fixed Services</option>
          <option>Food</option>
          <option>Grocery</option>
        </select>
        <p>{category}</p>
        <br />

        <div class="">
          <button class="btn btn-primary" type="button" onClick={addExpense}>
            Add Expense
          </button>
          <button className="btn btn-primary" type="button" onClick={ToastTest}>Toast Test</button>
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
            theme="light"
          />
        </div>
      </div>
    </>
  );
}

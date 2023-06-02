import React, { useState, ChangeEvent } from "react";
import Navbar from "./Navbar";

export default function AddExpense() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

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
    alert(
      `date: ${date}, desc: ${desc}, amount: ${amount}, category: ${category} `
    );
  };

  return (
      <>
      <Navbar/>
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
        <option>Vehicle Fuel and extra costs</option>
        <option>Education</option>
        <option>Outside Food</option>
      </select>
      <p>{category}</p>
      <br />

      <div class="">
        <button class="btn btn-primary" type="button" onClick={addExpense}>
          Add Expense
        </button>
      </div>
    </div>
    </>
  );
}

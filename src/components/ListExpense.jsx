import React from "react";
import Navbar from "./Navbar";

export default function ListExpense(){
    return(
    <>
    <Navbar/>
    <div class="table-responsive scrollbar">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Expense Date</th>
        <th scope="col">Expense Amount</th>
        <th scope="col">Expense Category</th>
        <th scope="col">Expense Description</th>
        <th class="text-end" scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01-Jan-2023</td>
        <td>3000</td>
        <td>Food</td>
        <td>Dominos Pizza</td>
        <td class="text-end">
        <div class="dropdown font-sans-serif position-static">
            <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false">
                <span class="fas fa-ellipsis-h fs--1">...</span></button>
            <div class="dropdown-menu dropdown-menu-end border py-0">
              <div class="py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>01-Mar-2023</td>
        <td>300</td>
        <td>Grocery</td>
        <td>Vegetables</td>
        <td class="text-end">
          <div><button class="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span class="text-500 fas fa-edit"></span></button><button class="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span class="text-500 fas fa-trash-alt"></span></button></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </>
    );
}
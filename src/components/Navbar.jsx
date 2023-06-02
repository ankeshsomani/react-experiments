import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/">EXPENSE MANAGER</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link className="nav-link" to="/addexpense"> 
      <span class="sr-only">AddExpense</span></Link>
    </li>
    <li class="nav-item">
      <Link className="nav-link" to="/showexpense">ListExpense</Link>
    </li>
  </ul>

</div>
</nav>
    );
};

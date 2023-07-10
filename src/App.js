
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NoPage from './components/404Page';
import ListExpenseMui from './components/ListExpensesMui';
import Dashboard from './components/Dashboard'
import Debug from './components/Debug';
import SignIn from "./components/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/home" Component={ListExpenseMui} />
          <Route path='/signin' Component={SignIn} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path='/debug' Component={Debug} />
          <Route path="*" Component={NoPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;


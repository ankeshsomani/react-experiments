import './assets/css/theme.min.css';
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import ExpenseCalculator from './components/ExpenseCalculator';
import ListExpense from './components/ListExpense';
import AddExpense from './components/AddExpense';
import Login from './components/login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>

    <BrowserRouter>
        <Routes>
          <Route path= "/" Component={Navbar}/>
          <Route path= "/addexpense" Component={AddExpense}/>
          <Route path= "/showExpense" Component={ListExpense}/>

        </Routes>
    </BrowserRouter>
   
  </>
  );
};


export default App;


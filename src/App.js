import './assets/css/theme.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NoPage from './components/404Page';
import ListExpenseMui from './components/ListExpensesMui';

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path= "/" Component={ListExpenseMui}/>
          <Route path= "*" Component={NoPage}/>
        </Routes>
    </BrowserRouter> 
   
  </>
  );
};


export default App;

